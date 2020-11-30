'use strict'
const express = require('express')
const path = require('path')

const app = express()

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