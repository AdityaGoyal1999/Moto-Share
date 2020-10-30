import React from 'react'

import NavBar from '../NavBar'
import Hero from '../Hero'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <NavBar loggedIn={false} />
        <Hero />
      </div>
    )
  }
}

export default HomePage
