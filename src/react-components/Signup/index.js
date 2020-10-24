import React from 'react'

import './style.css'

class Signup extends React.Component {
  render () {
    const validateEmail = () => {
      const inputs = document.querySelectorAll('.email')
      if (inputs[0].value !== inputs[1].value) {
        inputs[1].setCustomValidity('Does not match given email')
      } else {
        inputs[1].setCustomValidity('')
      }
    }

    const validatePassword = () => {
      const inputs = document.querySelectorAll('.password')
      if (inputs[0].value !== inputs[1].value) {
        inputs[1].setCustomValidity('Does not match given password')
      } else {
        inputs[1].setCustomValidity('')
      }
    }

    return (
      <form id='signupForm'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' required />
        <label>Date of Birth:</label>
        <input type='date' placeholder='yyyy-mm-dd' required />
        <label>Email:</label>
        <input className='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' required />
        <label>Confirm Email:</label>
        <input className='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' onChange={validateEmail} required />
        <label>Password:</label>
        <input className='password' type='password' placeholder='Enter password' minLength='8' required />
        <label>Confirm Password:</label>
        <input className='password' type='password' placeholder='Confirm password' minLength='8' onchange={validatePassword} required />
        <input id='submit' type='submit' value='Sign Up' />
      </form>
    )
  }
}

export default Signup
