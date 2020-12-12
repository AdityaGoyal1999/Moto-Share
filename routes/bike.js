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
const { mongo } = require('mongoose')
router.use(bodyParser.json())

// multipart middleware
const multipart = require('connect-multiparty')
const multipartMiddleware = multipart()
const default_id = 'motorc_nvtdlh'
const default_url = 'https://res.cloudinary.com/jblcloud/image/upload/v1607737396/motorc_nvtdlh.png'

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
const idChecker = (req, res, next) => {
  if(!ObjectID.isValid(req.params.id)) {
    log('invalid id')
    res.status(404).send()
    return
  }
  next()
}

// get all bikes
router.get('/api/bikes', mongoChecker, (req, res) => {
  Bike.find().then(result => {
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

// add bike to a user
// expects:
// {
//   'name': 'name',
//   'price': $/day,
//   'availabilityStart': 'yyyy-mm-dd',
//   'availabilityEnd': 'yyyy-mm-dd',
//   'location': 'location details',
//   'licence': 'licence plate',
//   'description': 'description',
//
//   'image': file // OPTIONAL
// }
router.post('/api/bikes/user/:id', mongoChecker, idChecker, multipartMiddleware, async (req, res) => {
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
  
  const bike = new Bike({
    name: req.body.name,
    price: req.body.price,
    availabilityStart: req.body.availabilityStart,
    availabilityEnd: req.body.availabilityEnd,
    location: req.body.location,
    licence: req.body.licence_plate,
    description: req.body.description,
    renter: "",
    image_id: image_id || default_id,
    image_url: image_url || default_url
  })

  User.findById(req.params.id).then(result => {
    if (result) {
			bike.owner = result
			result.bikes.push(bike)
			result.save()
			bike.save()
			res.send({'bike': bike, 'owner': result})
    } else {
      res.status(404).send('resource not found')
    }
  }).catch(error => {
    log(error)
    if (isMongoError) {
      res.status(500).send('internal server error')
    } else {
      res.status(400).send('bad request')
    }
  })
})

// modify bike
// expects:
// {
//   'name': 'name',
//   'price': $/day,
//   'availabilityStart': 'yyyy-mm-dd',
//   'availabilityEnd': 'yyyy-mm-dd',
//   'location': 'location details',
//   'licence_plate': 'licence plate',
//   'description': 'description',
//   'image': file
// }
router.patch('/api/bikes/:id', mongoChecker, idChecker, multipartMiddleware, async (req, res) => {
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
  
  Bike.findByIdAndUpdate(req.params.id, {
    'name': req.body.name,
    'price': req.body.price,
    'availabilityStart': req.body.availabilityStart,
    'availabilityEnd': req.body.availibilityEnd,
    'location': req.body.location,
    'licence': req.body.licence_plate,
    'description': req.body.description,
    'image_id': image_id || default_id,
    'image_url': image_url || default_url
  }, { new: true }).then(result => {
    console.log(result)
    if (result) {
      result.save()
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

// get bike details by id
router.get('/api/bikes/:id', mongoChecker, idChecker, (req, res) => {
  Bike.findById(req.params.id).then(result => {
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

// delete bike by id
router.delete('/api/bikes/:id', mongoChecker, idChecker, async (req, res) => {
  try {
    const deleted = await Bike.findByIdAndDelete(req.params.id)
    if (deleted) {
      const owner = await User.findById(deleted.owner)
      owner.bikes = owner.bikes.filter(bike => bike.toString() !== deleted._id.toString())
      owner.save()
      // await cloudinary.uploader.destroy(deleted.image_id)
      res.send(deleted)
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

// post review for a bike
// expects:
// {
//   rating: rating (number),
//   review: 'review of bike'
// }
router.post('/api/bikes/:id/reviews', mongoChecker, idChecker, (req, res) => {
  Bike.findById(req.params.id).then(result => {
    if (result) {
      result.rating = (result.rating * result.reviews.length + req.body.rating )
       / (result.reviews.length + 1) || req.body.rating
      result.reviews.push(req.body.review)
      result.save()
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

// rent bike to user
// expects: 
// {
//   uid: userid
// }
router.post('/api/bikes/:id/rent', mongoChecker, idChecker, async (req, res) => {
  if (!ObjectID.isValid(req.body.uid)) {
    return
  }
  try {
    const bike = await Bike.findById(req.params.id)
    const user = await User.findById(req.body.uid)
    if (bike && user) {
      bike.renter = req.body.uid
      bike.save()
      res.send({ bike: bike, renter: user })
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

// return bike
router.post('/api/bikes/:id/return', mongoChecker, idChecker, (req, res) => {
  Bike.findById(req.params.id).then(result => {
    if (result) {
      result.prevRenters.push(result.renter)
      result.renter = null
      result.save()
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

// get search results
router.post('/api/bikes/search', async (req, res) => {
  const start = new Date(req.body.availabilityStart)
  const end = new Date(req.body.availabilityEnd)
  Bike.find(
      {
        "location" : {$eq: req.body.location},
        "availabilityStart" : {$gte : start},
        "availabilityEnd" : {$lte: end}
      }
  ).then(result => {
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

// get bikes rented to user by id
router.get('/api/bikes/to/:id', mongoChecker, idChecker, (req, res) => {
  Bike.find({
    "renter": {$eq: req.params.id}
  }).then(result => {
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

module.exports = router