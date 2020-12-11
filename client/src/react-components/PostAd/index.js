import React from 'react'

import './style.css'
import NavBar from '../NavBar'
import PostImages from './PostImages'
import Footer1 from '../Footer1'
import PostAdInfo from './PostAdInfo'

/* Ad Submission Component */
class PostAd extends React.Component {
  constructor(props){
    super(props)
  }

  render () {

    return (
      <div className='postAds'>
        <NavBar />
        <div id="adsInfo">
          <PostImages />
          <PostAdInfo {...this.props} currentUser={this.props.currentUser} />
        </div>
        <Footer1 />
      </div>
    )
  }
}

export default PostAd