'use strict'
const log = console.log
const express = require('express')
const router = express.Router()

const { mongoose } = require('../db/mongoose')
const { ObjectID } = require('mongodb')
const { User } = require('../models/user')
const { Bike } = require('../models/bike')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser')
router.use(bodyParser.json())

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
const idChecker = (req, res, next) => {
  if(!ObjectID.isValid(req.params.id)) {
    log('invalid id')
    res.status(404).send()
    return
  }
  next()
}

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

// get user by email & password
// expects:
// {
//   email: 'user email',
//   password: 'password'
// }
router.get('/api/users/login', mongoChecker, (req, res) => {
  User.findByEmailPassword(req.body.email, req.body.password).then(result => {
    if (result) {
      res.send(result)
    } else {
      res.status(404).send('resource not found')
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

// create user
// Expects:
// {
//   email: 'email',
//   password: 'minlength6',
//   name: 'min length 4',
// }
router.post('/api/users', mongoChecker, (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    location: '',
    rating: -1,
    reviews: [],
    rentedTo: 0,
    bikes: []
  })

  newUser.save().then((result) => {
    res.send(result)
  }).catch(error => {
    log(error)
    if (isMongoError) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})

// get user by id
router.get('/api/users/:id', mongoChecker, idChecker, (req, res) => {
  User.findById(req.params.id).then(result => {
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
//   image_id: 'image id',
//   image_url: 'image url'
// }
router.patch('/api/users/:id/image', mongoChecker, idChecker, (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    $set: req.body
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
      let deletedBikes = []
      for (let i = 0; i < user.bikes.length; i++) {
        const bike = await Bike.findByIdAndDelete(user.bikes[i])
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
