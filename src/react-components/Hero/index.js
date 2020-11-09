import React from 'react'

import './style.css'

// Home page hero
class Hero extends React.Component {
  render () {
    return (
      <div id='hero'>
        <video src='/video.mp4' autoPlay loop muted />
        <h1>Project Name <br /> Motorcycles When You Need Them.</h1>
      </div>
    )
  }
}

export default Hero
