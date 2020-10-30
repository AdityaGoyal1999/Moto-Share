import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'
import SearchBox from '../SearchBox'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <NavBar loggedIn={false} />
        <Hero />
        <SearchBox />
      </div>
    )
  }
}

export default HomePage
