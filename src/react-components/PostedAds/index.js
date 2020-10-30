import React from 'react'

import './style.css'
import AdsBoard from './AdsBoard'
import NavBar from './NavBar'
import Footer from './Footer'

const getAdData = event => {
  event.preventDefault()
  // server call goes here to get Ad Data
}

class PostedAdsPage extends React.Component {
  
  createSampleAds () {
    const ads = []
    for (let i = 0; i < 3; i++) {
      ads.push({id:i, description:'Red Motorcycle'})
    }
    return ads;
  }
  
  render () {

    return (
      <div id='postedAds'>
        <NavBar />
        <AdsBoard ads={this.createSampleAds()}/>
        <Footer />
      </div>
    )
  }
}

export default PostedAdsPage