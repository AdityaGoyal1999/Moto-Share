import React from 'react'
import './style.css'
import { Button, ButtonGroup, AppBar, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core'

class NavBar extends React.Component {
  state = {
    anchorEl: null, // Anchor element for the profile menu (when logged in)
  }

  // Anchor and display profile menu
  openMenu = (event) => {
    this.setState({
      anchorEl: document.querySelector('#menuAnchor')
    })
  }

  // Remove anchor and hide profile menu
  closeMenu = () => {
    this.setState({
      anchorEl: null
    })
  }

  renderLoginArea = () => {
    //if user is not logged in, show login/sign up
    if (!this.props.loggedIn) {
      return (
        <ButtonGroup id='login'>
          <Button href='/signup'>Sign Up</Button>
          <Button href='/login'>Log In</Button>
        </ButtonGroup>
      )
    } else {
      //if user is logged in, show profile menu
      return (
        <div>
          {/* SAMPLE will be replaced by username, given by server */}
          <Button id='menuAnchor' onClick={this.openMenu}>SAMPLE</Button>
          <Menu anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.closeMenu}>
            {/* On click will call server to get proper account page */}
            <MenuItem><a href='/AccountInfo'>My Account</a></MenuItem>
            {/* Temporary, in phase 2 log in/out is handled by server calls in one view */}
            <MenuItem><a href='/'>Log Out</a></MenuItem>
          </Menu>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <AppBar>
          <Toolbar id='navbar'>
            <Typography variant='h6'><a href='/'>MotoShare</a></Typography>
            {this.renderLoginArea()}
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
      </div>
    )
  }
}

export default NavBar
