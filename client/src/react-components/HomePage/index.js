import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'
import SearchBox from '../SearchBox'
import HomeCards from '../HomeCards'
import Footer1 from '../Footer1'
import './style.css'

// The main page (at '/')
class HomePage extends React.Component {
  render () {
    return (
      <div id='homeContainer'>
        <NavBar loggedIn={this.props.loggedIn}  />
        <Hero />
        <SearchBox />
        <HomeCards />
        <Footer1 />
      </div>
    )
  }
}

export default HomePage
