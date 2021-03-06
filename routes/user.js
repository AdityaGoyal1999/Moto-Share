'use strict'
const log = console.log
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()

const { mongoose } = require('../db/mongoose')
const { ObjectID } = require('mongodb')
const { User } = require('../models/user')
const { Bike } = require('../models/bike')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser')
router.use(bodyParser.json())

// multipart middleware
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const default_id = 'yeirxbewxirapk6lzyd6'
const default_url = 'https://res.cloudinary.com/jblcloud/image/upload/v1607713508/yeirxbewxirapk6lzyd6.png'

// cloudinary config
const cloudinary = require('cloudinary')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'jblcloud',
  api_key: process.env.API_KEY || '615272663218367',
  api_secret: process.env.API_SECRET || '8DiQuqz_zEe2aFqxWr1688QM2Vs'
})

function isMongoError (error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState !== 1) {
    log('Issue with mongoose connection')
    res.status(500).send('Internal server error')
    return
  } else {
    next()
  }
}


// middleware to check valid id param
const idChecker = async (req, res, next) => {
  console.log("idchecker "+req.params.id)
  const check = ObjectID.isValid(req.params.id)
  console.log("This is the check: "+check)
  if(!check) {
    log('invalid id')
    res.status(404).send()
    return
  }
  next()
}


// A route to check if a user is logged in on the session
router.get("/api/users/check-session", async (req, res) => {
  if (req.session.user) {
      res.send({ currentUser: req.session.user });
  } else {
      res.status(401).send();
  }
});

// get all users
router.get('/api/users', mongoChecker, (req, res) => {
  User.find().then(result => {
    res.send(result)
  }).catch(error => {
    log(error)
    if (isMongoError(error)) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})

router.post('/api/users/login', mongoChecker, async (req, res) => {
  //Validating login registration details
  // let {error} = loginValidation(req.body);
  // if (error)
  //     return res.status(400).json({error: error.details[0].message});

  let user = await User.findOne({email: req.body.email}).exec();
  // if the email does not exist
  if (!user) {
      return res.status(400).json({error: 'Unable to login'});
  }

  //check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
      return res.status(400).json({error: 'Password is incorrect'});

  req.session.user = user._id;
  req.session.email = user.email;
  res.send({ currentUser: user._id});
  
});

// A route to logout a user
router.get("/api/users/logout", async (req, res) => {
  // Remove the session
  req.session.destroy(error => {
      if (error) {
          res.status(500).send(error);
      } else {
          res.send()
      }
  });
  // req.session = null
  // res.send(200)
});

// create user
// Expects:
// {
//   email: 'email',
//   password: 'minlength6',
//   name: 'min length 4',
// }
router.post('/api/users', mongoChecker, async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    location: '',
    rating: 0,
    reviews: [],
    rentedTo: 0,
    bikes: []
  })

  newUser.save()
      .then((result) => {
          req.session.user = result._id;
          req.session.email = result.email;
          res.send(result)
        })
      .catch(error => {
        log(error)
        if (isMongoError) {
          return res.status(500).json('internal server error')
        } else {
          return res.status(400).json('bad request')
        }
      })
})

// get user by id
// expects:
// {
//   id: ObjectID
// }
router.get('/api/users/:id', mongoChecker, idChecker, async (req, res) => {

  // const user = await User.findById(req.params.id)
  // res.send(user)

  User.findById(req.params.id).exec().then(result => {
    if (!result) {
      res.status(404).send('resource not found')
    } else {
      res.send(result)
    }
  }).catch(error => {
    log(error)
    if (isMongoError(error)) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})


// leave a review for a user
// expects:
// {
//   rating: rating given by review,
//   review: 'the review'
// }
router.post('/api/users/:id/reviews', mongoChecker, idChecker, (req, res) => {
  User.findById(req.params.id).then(result => {
    if (!result) {
      res.status(404).send('resource not found')
    } else {
      // update average rating and add new review
      result.rating = (result.rating * result.reviews.length + req.body.rating) / (result.reviews.length + 1)
      result.reviews.push(req.body.review)
      result.save()
      res.send({review: {
        rating: req.body.rating,
        review: req.body.review
      }, user: result})
    }
  }).catch(error => {
    log(error)
    if (isMongoError(error)) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})

// update user image
// expects:
// {
//   'image': file
// }
router.patch('/api/users/:id/image', mongoChecker, idChecker, multipartMiddleware, async (req, res) => {
  let image_id = ''
  let image_url = ''
  if (req.files) {
    try{
      await cloudinary.uploader.upload(
      req.files.image.path,
      function (result) {
        image_id = result.public_id
        image_url = result.url
      }
      )
    } catch (error) {
      log(error)
      res.status(400).send('bad request')
    }
  }

  User.findByIdAndUpdate(req.params.id, {
    image_id: image_id || default_id,
    image_url: image_url || defaulut_url
  }, { new: true }).then(result => {
    if (!result) {
      res.status(404).send('resource not found')
    } else {
      result.save()
      res.send({image: req.body, user: result})
    }
  }).catch(error => {
    log(error)
    if (isMongoError(error)) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})


// delete a user and all their bikes
router.delete('/api/users/:id', mongoChecker, idChecker, async (req, res) => {
  try {  
    const user = await User.findByIdAndDelete(req.params.id)
    if (user) {
      if (user.image_id) {
        await cloudinary.uploader.destroy(user.image_id)
      }
      let deletedBikes = []
      for (let i = 0; i < user.bikes.length; i++) {
        const bike = await Bike.findByIdAndDelete(user.bikes[i])
        await cloudinary.uploader.destroy(bike.image_id)
        deletedBikes.push(bike)
      }
      res.send({ user: user, deletedBikes: deletedBikes })
    } else {
      res.status(404).send('resource not found')
    }
  } catch (error) {
    log(error)
    if (isMongoError(error)) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  }
})

module.exports = router
