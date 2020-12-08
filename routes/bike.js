'use strict'
const log = console.log
const express = require('express')
const router = express.Router()

const { mongoose } = require('../db/mongoose')
const { ObjectID, ObjectId } = require('mongodb')
const { User } = require('../models/user')
const { Bike } = require('../models/bike')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require('body-parser')
const { mongo } = require('mongoose')
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
//   'avail_from': 'yyyy-mm-dd',
//   'avail_to': 'yyyy-mm-dd',
//   'location': 'location details',
//   'licence_plate': 'licence plate',
//   'description': 'description',
//
//   'image_id': 'id', //OPTIONAL
//   'image_url': 'url //OPTIONAL
// }
router.post('/api/users/:id', mongoChecker, idChecker, (req, res) => {
  const bike = new Bike({
    name: req.body.name,
    price: req.body.price,
    avail_from: req.body.avail_from,
    avail_to: req.body.avail_to,
    location: req.body.location,
    license: req.body.licence_plate,
    description: req.body.description,
    image_id: req.body.image_id || '',
    image_url: req.body.image_url || ''
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
//   'avail_from': 'yyyy-mm-dd',
//   'avail_to': 'yyyy-mm-dd',
//   'location': 'location details',
//   'licence_plate': 'licence plate',
//   'description': 'description',
//   'image_id': 'id', //OPTIONAL
//   'image_url': 'url //OPTIONAL
// }
router.patch('/api/bikes/:id', mongoChecker, idChecker, (req, res) => {
  Bike.findByIdAndUpdate(req.params.id, {
    'name': req.body.name,
    'price': req.body.price,
    'avail_from': req.body.avail_from,
    'avail_to': req.body.avail_to,
    'location': req.body.location,
    'licence_plate': req.body.licence_plate,
    'description': req.body.description,
    'image_id': req.body.image_id || '',
    'image_url': req.body.image_url || ''
  }, { new: true }).then(result => {
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
router.delete('/api/bikes/:id', mongoChecker, idChecker, (req, res) => {
  Bike.findByIdAndDelete(req.params.id).then(result => {
    if (result) {
      result.owner.bikes = result.owner.bikes.filter(bike => bike !== result)
      result.owner.save()
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
       / (result.reviews.length + 1)
      result.reviews.push(req.body.review)
      result.save()
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
      bike.renter = uid
      bike.save()
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