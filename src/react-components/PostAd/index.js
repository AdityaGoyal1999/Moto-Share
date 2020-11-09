import React from 'react'

import './style.css'
import NavBar from '../NavBar'
import PostImages from './PostImages'
import Footer1 from '../Footer1'
import PostAdInfo from './PostAdInfo'

class PostAd extends React.Component {

  render () {

    return (
      <div className='postAds'>
        <NavBar />
        <div id="adsInfo">
          <PostImages />
          <PostAdInfo />
        </div>
        <Footer1 />
      </div>
    )
  }
}

export default PostAd