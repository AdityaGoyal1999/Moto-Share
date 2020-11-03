import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'
import SearchBox from '../SearchBox'
import HomeCards from '../HomeCards'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <NavBar loggedIn={false} />
        <Hero />
        <SearchBox />
        <h2>How it works: </h2>
        <HomeCards />
      </div>
    )
  }
}

export default HomePage
