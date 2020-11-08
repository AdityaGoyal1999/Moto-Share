import React from 'react'

import './style.css'
import AdsBoard from './AdsBoard'
import NavBar from '../NavBar'
import Footer1 from '../Footer1'

const getAdData = event => {
  event.preventDefault()
  // server call goes here to get Ad Data
}

class PostedAdsPage extends React.Component {
  
  createSampleAds () {
    const ads = []
    for (let i = 0; i < 20; i++) {
      ads.push({id:i, name:"Honda 5000", price:100, rating:4.5, description:'Red Motorcycle with 2 wheels'})
    }
    return ads;
  }
  
  render () {

    return (
      <div id='postedAds'>
        <NavBar />
        <AdsBoard ads={this.createSampleAds()}/>
        <Footer1 />
      </div>
    )
  }
}

export default PostedAdsPage