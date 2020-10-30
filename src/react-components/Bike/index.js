import React from 'react'

import './style.css'


import NavBar from '../Results/NavBar'
import Footer from '../Results/Footer'

const getAdData = event => {
    event.preventDefault()
        // server call goes here to get Ad Data
}

class Results extends React.Component {

    createSampleAds() {
        const ads = []
        for (let i = 0; i < 3; i++) {
            ads.push({ id: i, description: 'Red Motorcycle' })
        }
        return ads;
    }

    render() {

        return ( <
            div id = 'postedAds' >
            <
            NavBar / >
            <
            Footer / >
            <
            /div>
        )
    }
}

export default Results