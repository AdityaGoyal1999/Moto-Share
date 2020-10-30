import React from 'react'

import './style.css'
import Ads from './Ads'

const getUserAds = event => {
  event.preventDefault()
  // server call to get the ad data.
}

class AdsBoard extends React.Component {
  render () {
    return (
      <div id='adsBoard'>
        <h1>View Your Ads</h1>
        <div id="adsView">
          <Ads />
          <Ads />
          <Ads />
        </div>
      </div>
    )
  }
}

export default AdsBoard