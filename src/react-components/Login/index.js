import React from 'react'
import { Button } from '@material-ui/core'

import './style.css'

// The login form
class Login extends React.Component {
  render () {
    // Check that all form inputs are valid
    const validateForm = () => {
      const inputs = document.querySelector('#loginForm input')
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          inputs[i].reportValidity()
          return false
        }
      }
      return true
    }

    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault()
      if (validateForm()) {
        // server call goes here to handle log in attempt
        window.open('/', '_self')
      }
    }

    return (
      <form id='loginForm'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' required />
        <label>Password:</label>
        <input type='password' placeholder='Enter password' required />
        <Button onClick={handleSubmit}>Log In</Button>
        <label class='errorMessage'>Error: Username and Password not found</label>
      </form>
    )
  }
}

export default Login
