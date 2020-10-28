import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './templol.png'

class NavBar extends React.Component {
  render () {
    return (
      <nav id='navbar'>
        <Link to='./'>
          <img id='navimg' src={logo} alt='Logo' />
        </Link>
        <div>
          <Link>
            <button>About Us</button>
          </Link>
          <Link to='/signup'>
            <button>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button>Log In</button>
          </Link>
        </div>
      </nav>
    )
  }
}

export default NavBar
