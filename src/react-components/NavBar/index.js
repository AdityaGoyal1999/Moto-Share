import React from 'react'
import './style.css'
import { Button, ButtonGroup, AppBar, Toolbar, Typography } from '@material-ui/core'

class NavBar extends React.Component {
  render () {
    const renderLoginArea = () => {
      if (!this.props.loggedIn) {
        return (
          <ButtonGroup id='login'>
            <Button href='/signup'>Sign Up</Button>
            <Button href='/login'>Log In</Button>
          </ButtonGroup>
        )
      }
    }

    return (
      <AppBar>
        <Toolbar id='navbar'>
          <Typography variant='h6'>Project Name</Typography>
          <Button>About Us</Button>
          {renderLoginArea()}
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar
