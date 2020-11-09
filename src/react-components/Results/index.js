import React from 'react'

import './style.css'

import AdsBoard from './AdsBoard'
import NavBar from '../NavBar'
import Footer from '../Footer1'

const getAdData = event => {
    event.preventDefault()
        // server call goes here to get Ad Data
}

class Results extends React.Component {

    createSampleAds() {
        const ads = []
        for (let i = 0; i < 5; i++) {
            ads.push({ id: i, description: 'Harley Davidson' })
        }
        return ads;
    }

    render() {

        return ( 
            <div id = 'postedAds' >
            <NavBar / >
            <div className="container">
                <AdsBoard ads = { this.createSampleAds() }/>
            </div>
            </div>
        )
    }
}

export default Results