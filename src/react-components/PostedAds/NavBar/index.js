import React from 'react'

import './style.css'

class NavBar extends React.Component {
  render () {
    return (
      <div id='navBar'>
          <button id='home' >Home</button>
          <button id='profile'>Profile</button>
      </div>
    )
  }
}

export default NavBar