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
        // temporary view to see home page as logged in
        // logging in and out will be handled by server calls in future
        const username = document.querySelector("input[name='username']").value
        const password = document.querySelector("input[name='password']").value
        if (username === 'admin' && password === 'admin') {
          window.open('/admin', '_self')
        } else if (username === 'user' && password === 'user') {
          window.open('/loggedIn', '_self')
        }
      }
    }

    return (
      <form id='loginForm'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' name='username' required />
        <label>Password:</label>
        <input type='password' placeholder='Enter password' name='password' required />
        <Button onClick={handleSubmit}>Log In</Button>
        <label class='errorMessage'>Error: Username and Password not found</label>
      </form>
    )
  }
}

export default Login
