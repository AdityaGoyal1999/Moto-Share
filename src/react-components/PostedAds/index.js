import React from 'react'

import './style.css'
import AdsBoard from './AdsBoard'
import NavBar from './NavBar'
import Footer from './Footer'

// const submitForm = event => {
//   event.preventDefault()
//   // server call goes here to handle sign up
// }

class PostedAdsPage extends React.Component {
  render () {
    return (
      <div id='postedAds'>
        <NavBar />
        <AdsBoard />
        <Footer />
      </div>
    )
  }
}

export default PostedAdsPage