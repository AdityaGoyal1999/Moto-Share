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
        <Ads />
      </div>
    )
  }
}

export default AdsBoard