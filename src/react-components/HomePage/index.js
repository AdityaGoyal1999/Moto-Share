import React from 'react'

import NavBar from '../NavBar'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <NavBar loggedIn={false} />
      </div>
    )
  }
}

export default HomePage
