import React from 'react'
import './style.css'
import { Button, ButtonGroup, AppBar, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core'

class NavBar extends React.Component {
  state = {
    anchorEl: null,
  }

  openMenu = (event) => {
    this.setState({
      anchorEl: document.querySelector('#menuAnchor')
    })
  }

  closeMenu = () => {
    this.setState({
      anchorEl: null
    })
  }

  logout = () => {
    this.setState({
      username: null
    })
  }

  renderLoginArea = () => {
    if (!this.state.username) {
      return (
        <ButtonGroup id='login'>
          <Button href='/signup'>Sign Up</Button>
          <Button href='/login'>Log In</Button>
        </ButtonGroup>
      )
    } else {
      return (
        <div>
          {/* SAMPLE will be replaced by username */}
          <Button id='menuAnchor' onClick={this.openMenu}>SAMPLE</Button>
          <Menu anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.closeMenu}>
            <MenuItem><a href='/AccountInfo'>My Account</a></MenuItem>
            <MenuItem onClick={this.logout}>Log Out</MenuItem>
          </Menu>
        </div>
      )
    }
  }

  render () {
    return (
      <AppBar>
        <Toolbar id='navbar'>
          <Typography variant='h6'><a href='/'>Project Name</a></Typography>
          <Button>About Us</Button>
          {this.renderLoginArea()}
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar
