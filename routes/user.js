'use strict'
const log = console.log
const express = require('express')
const router = express.Router()

const { mongoose } = require('../db/mongoose')
const { ObjectID } = require('mongodb')
const { User } = require('../models/user')
const bcrypt = require('bcryptjs')

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
    password: req.body.email,
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
// expects:
// {
//   id: ObjectID
// }
router.get('/api/users/:id', mongoChecker, idChecker, (req, res) => {
  User.findById(req.params.id).then(result => {
    if (!result) {
      res.status(404).send('Resource not found')
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

// get user by email/pass
// expects: 
// {
//   email: 'email address',
//   password: 'password'
// }
router.get('/api/userByEmail', mongoChecker, async (req, res) => {
  User.findOne({
    email: req.body.email
  }).then(result => {
    if (!result) {
      res.status(404).send('Resource not found')
    } else {
      const foundPass = result.password
      bcrypt.compare(foundPass, req.body.password).then(bcryptResult => {
        res.send(result)
      }).catch(error => {
        log(error)
      })
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
