import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Login from '../Login'
import Signup from '../Signup'

class AccountAccess extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          isLoginView: this.props.isLoginView
      }
  }

  getForm = (props) => {
      if (props.isLoginView) {
          return <Login />
      } else {
          return <Signup />
      }
  }
  
  render () {
    return (
      <div id='accessBody'>
        <Link to='/'>
          <button>Return to Home Page</button>
        </Link>
        <div id='accessForm'>
          <Link to='./signup'>
            <button>Sign Up</button>
          </Link>
          <Link to='./login'>
            <button>Log In</button>
          </Link>
          <h2>{ (this.props.isLoginView ? 'Log In' : 'Sign Up') }</h2>
          { this.getForm(this.props) }
        </div>
      </div>
    )
  }
}

export default AccountAccess