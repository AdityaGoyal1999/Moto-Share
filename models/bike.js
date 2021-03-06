/* User model */
'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BikeSchema = new mongoose.Schema({

    name: {
        type: String,
		required: true,
		minlength: 4,
    },
    location: String,
    rating: Number,
    availabilityStart: {
        type: Date
    },
    availabilityEnd: {
        type: Date
    },
    reviews: [String],
    owner: {type: Schema.ObjectId, ref: 'UserSchema'},
    price: Number,
    licence: String,
    description: String,
    renter: {type: Schema.ObjectId, ref: 'UserSchema'},
    prevRenters: [{type: Schema.ObjectId, ref: 'UserSchema'}],
    image_id: {
        type: String,
        required: false
    },
    image_url: {
        type: String,
        required: false
    }
    
})

// make a model using the User schema
const Bike = mongoose.model('Bike', BikeSchema)
module.exports = { Bike }