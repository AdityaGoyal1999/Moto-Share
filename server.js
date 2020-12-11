'use strict'
const express = require('express')
const path = require('path')
const cors = require('cors')

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

app.use(cors({
    origin:['http://localhost:5000'],
    methods:['GET','POST'],
    credentials: true // enable set cookie
}));

// Create a session and session cookie
app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 1000*60*60,
            httpOnly: true
        },
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })
  );
  
  

app.use(require('./routes/user'))
app.use(require('./routes/bike'))

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