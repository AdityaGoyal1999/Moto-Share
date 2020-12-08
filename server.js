'use strict'
const express = require('express')
const path = require('path')

const app = express()

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); 

// import the mongoose models
const { User } = require("./models/user");
const { Bike } = require("./models/bike");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

app.use(bodyParser.urlencoded({ extended: true }));

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

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}

// Create a session and session cookie
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        },
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
);


// A route to check if a user is logged in on the session
app.get("/api/users/check-session", (req, res) => {
  
    if (req.session.user) {
        res.send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
});


app.use(express.static(path.join(__dirname, '/client/build')))

app.get('*', (req, res) => {
    const goodRoutes = ['/', '/loggedIn', '/login', '/signup', '/admin', 
    '/postedads', '/results', '/postad', '/CompleteBikeInfo', '/User']
    if (!goodRoutes.includes(req.url)) {
        res.status(404)
    }

    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})