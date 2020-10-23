import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

class Login extends React.Component {
  render () {
    return (
      <div id='loginBody'>
        <div id='mainView'>
          <h2>Log In</h2>
          <form id='loginForm'>
            <label>Username:</label>
            <input type='text' placeholder='Enter username' required />
            <label>Password:</label>
            <input type='password' placeholder='Enter password' required />
            <input type='submit' value='Log In' />
          </form>
          <div id='links'>
            <Link to='/'>
              <button>Return to Home Page</button>
            </Link>
            <Link to='/signup'>
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
