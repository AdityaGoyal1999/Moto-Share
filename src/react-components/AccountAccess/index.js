import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Login from '../Login'
import Signup from '../Signup'

class AccountAccess extends React.Component {
  render () {
    const getForm = (isLoginView) => {
      if (isLoginView) {
        return <Login />
      } else {
        return <Signup />
      }
    }

    return (
      <div id='accessBody'>
        <Link to='/'>
          <button id='returnButton'>{'< Return to Home Page'}</button>
        </Link>
        <div id='accessForm'>
          <div id='links'>
            <Link to='./signup'>
              <button>Sign Up</button>
            </Link>
            <Link to='./login'>
              <button>Log In</button>
            </Link>
          </div>
          <h2>{(this.props.isLoginView ? 'Log In' : 'Sign Up')}</h2>
          {getForm(this.props.isLoginView)}
        </div>
      </div>
    )
  }
}

export default AccountAccess
