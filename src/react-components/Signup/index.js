import React from 'react'

import './style.css'

class Signup extends React.Component {
  render () {
    return (
      <form id='signupForm'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' required />
        <label>Date of Birth:</label>
        <input type='date' placeholder='yyyy-mm-dd' required />
        <label>Email:</label>
        <input type='text' placeholder='someone@example.com' required />
        <label>Confirm Email:</label>
        <input type='text' placeholder='someone@example.com' required />
        <label>Password:</label>
        <input type='password' placeholder='Enter password' required />
        <label>Confirm Password:</label>
        <input type='password' placeholder='Confirm password' required />
        <input type='submit' value='Sign Up' />
      </form>
    )
  }
}

export default Signup
