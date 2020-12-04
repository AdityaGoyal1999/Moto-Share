'use strict'
const log = console.log
const express = require('express')
const router = express.Router()

const { mongoose } = require('../db/mongoose')
const { ObjectID } = require('mongodb')
const { User } = require('../models/user')
const { Bike } = require('../models/bike')

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
router.use(bodyParser.json());

function isMongoError(error) { // checks for first error returned by promise rejection if Mongo database suddently disconnects
    return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
    // check mongoose connection established.
    if (mongoose.connection.readyState != 1) {
        log('Issue with mongoose connection')
        res.status(500).send('Internal server error')
        return;
    } else {
        next()  
    }   
}

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

module.exports = router