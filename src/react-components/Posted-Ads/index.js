import React from 'react'

import './style.css'

const submitForm = event => {
  event.preventDefault()
  // server call goes here to handle sign up
}

class Posted_Ads_Page extends React.Component {
  render () {
    return (
      <form id='Posted-Ads'>
        <label>Username:</label>
        <input type='text' placeholder='Enter username' required />
        <label>Password:</label>
        <input type='password' placeholder='Enter password' required />
        <input type='submit' value='Log In' onClick={submitForm} />
      </form>
    )
  }
}

export default Login