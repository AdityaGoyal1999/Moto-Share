import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'
import SearchBox from '../SearchBox'
import HomeCards from '../HomeCards'
import './style.css'

// The main page (at '/')
class HomePage extends React.Component {
  render () {
    return (
      <div id='homeContainer'>
        <NavBar loggedIn={false} />
        <Hero />
        <SearchBox />
        <HomeCards />
      </div>
    )
  }
}

export default HomePage
