import React from 'react'

import './style.css'

class Login extends React.Component {
  render () {
    return (
      <form id='loginForm'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' required />
        <label>Password:</label>
        <input type='password' placeholder='Enter password' required />
        <input type='submit' value='Log In' />
      </form>
    )
  }
}

export default Login
