import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './templol.png'
import { Button, ButtonGroup } from '@material-ui/core'

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
      <nav id='navbar'>
        <Link to='./'>
          <img id='navimg' src={logo} alt='Logo' />
        </Link>
        <div>
          <Button id='aboutButton'>About Us</Button>
          {renderLoginArea()}
        </div>
      </nav>
    )
  }
}

export default NavBar
