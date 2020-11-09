import React from 'react'

import './style.css'
import AdsBoard from './AdsBoard'
import NavBar from '../NavBar'
import Footer1 from '../Footer1'

const getUserData = event => {
  event.preventDefault()
  // server call goes here to get Ad Data
}

class PostedAdsPage extends React.Component {
  
  constructor(props) {
    super(props)

    // These will be server calls to get the acutal data:

    // {userInfo, ads} = getUserData()
    this.state = {
      // ads: ads
      // userInfo: userInfo
    }
  }

  createSampleAds () {

    // Sample data for testing purposes

    // This data comes from this.state.ads
    const names = ['Honda Super Cub', 'Honda CB77', 'Triumph Bonneville', 'Honda CB750', 'Harley-Davidson XR750', 'Kawasaki Triple', 'Ducati 900SS', 'BMW R100S', 'Yamaha XT500']
    const prices = [20, 30, 40, 25, 15, 50, 34, 26, 43, 53]
    const ratings = [4.0, 3.5, 5.0, 4.3, 4.2, 4.1, 5.0, 3.6, 3.2, 4.7]

    // This data will come from this.state.userInfo
    const tips = []


    const ads = []
    for (let i = 0; i < 9; i++) {
      ads.push({id:i, name:names[i], price:prices[i], rating:ratings[i], description:'Red Motorcycle with 2 wheels.'})
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