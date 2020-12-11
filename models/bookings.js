/* User model */
'use strict';

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    rentedFrom: {
        type: Date
    },
    rentedTo: {
        type: Date
    },
    owner: {type: Schema.ObjectId, ref: 'UserSchema'},
    renter: {type: Schema.ObjectId, ref: 'UserSchema'},
    bike: {type: Schema.ObjectId, ref: 'BikeSchema'}
})

// make a model using the User schema
const Booking = mongoose.model('Booking', BookingSchema)
module.exports = { Booking }