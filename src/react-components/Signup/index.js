import React from 'react'

import './style.css'

class Signup extends React.Component {
  render () {
    const validateEmail = () => {
      // checks that email and confirm email have same value
      const inputs = document.querySelectorAll('.email')
      if (inputs[0].value !== inputs[1].value) {
        inputs[1].setCustomValidity('Does not match given email')
        return false
      } else {
        inputs[1].setCustomValidity('')
        return true
      }
    }

    const validatePassword = () => {
      // checks that password and confirm password have same value
      const inputs = document.querySelectorAll('.password')
      if (inputs[0].value !== inputs[1].value) {
        inputs[1].setCustomValidity('Does not match given password')
        return false
      } else {
        inputs[1].setCustomValidity('')
        return true
      }
    }

    const validateForm = () => {
      // checks default and custom validation, returns true if valid form inputs
      const inputs = document.getElementsByTagName('input')
      for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          inputs[i].reportValidity()
          return false
        }
      }
      return true
    }

    const submitForm = event => {
      event.preventDefault()
      if (validateForm()) {
        // server call goes here to handle sign up
        window.open('/', '_self')
      }
    }

    return (
      <form id='signupForm'>
        <label>Username:</label>
        <input type='text' name='username' placeholder='Enter username' required />
        <label>Date of Birth:</label>
        <input type='date' name='date' placeholder='yyyy-mm-dd' required />
        <label>Email:</label>
        <input className='email' name='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' required />
        <label>Confirm Email:</label>
        <input className='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' onChange={validateEmail} required />
        <label>Password:</label>
        <input className='password' name='password' type='password' placeholder='Enter password' minLength='8' required />
        <label>Confirm Password:</label>
        <input className='password' type='password' placeholder='Confirm password' minLength='8' onChange={validatePassword} required />
        <input type='submit' value='Sign Up' onClick={submitForm} />
      </form>
    )
  }
}

export default Signup
