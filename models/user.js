/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		validate: {
			validator: validator.isEmail,   // custom validator
			message: 'Not valid email'
		}
	}, 
	password: {
		type: String,
		required: true,
		minlength: 6
    },
    name: {
        type: String,
        required: true,
		minlength: 4,
    },
    location: String,
    rating: Number,
    reviews: [String],
    rentedTo: Number,  // Check if this needs to be here
    bikes: [{type: Schema.ObjectId, ref: 'BikeSchema'}],
    image_id: {
        type: String,
        required: false
    },
    image_url: {
        type: String,
        required: false
    }
    
})


UserSchema.pre('save', function(next) {
	const user = this; 

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.hash(user.password, 10, (err, hash) => {
			user.password = hash
			next()
		})
	} else {
		next()
	}
})



// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByEmailPassword = function(email, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ email: email }).then((user) => {
		if (!user) {
			return Promise.reject(new Error('404'))  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject(err)
				}
			})
		})
    })
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }