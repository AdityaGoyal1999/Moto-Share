import React from 'react'
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import {login} from '../../actions/user'

import './style.css'

// <form id='loginForm'>
//   <label>Username:</label>
//   <input type='text' placeholder='Enter username' name='username' required />
//   <label>Password:</label>
//   <input type='password' placeholder='Enter password' name='password' required />
//   <Button onClick={handleSubmit}>Log In</Button>
//   <label className='errorMessage'>Error: Username and Password not found</label>
// </form>



// The login form
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: null,
        password: null,
    }
    // this.props.history.push('/login')
}
handleOnChangeEmail = (new_email) => {
    this.setState((state) => {
        return{
            ...state,
            email: new_email,
        }
    })
}

handleOnChangePassword = (new_password) => {
  this.setState((state) => {
      return {
          ...state,
          password: new_password,
      };
  });
};

handleSubmit = async (event, app) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
      console.log("cas");
      event.preventDefault();
      event.stopPropagation();
      return;
  }
  const payload = {
      email: this.state.email,
      password: this.state.password,
  };
  try {
      console.log("login")
      login(payload);
      
    //   app.setState({currentUser: responseData.currentUser})
    //   console.log(responseData)
    //   console.log(app.state.currentUser)
    //   console.log(errorMessage)
      // console.log(responseData);
      //
      // if (!responseData) {
      //     alert(errorMessage);
      // } else {
      //     // successfully logged in
      //     this.context.setCurrentUser({
      //         accessToken: responseData.accessToken,
      //         userId: responseData.userId,
      //     });
      //     this.props.history.push("/landing");
      // }
  } catch (error) {
      alert(
          "An error occurred connecting to the server," +
          "please make sure you have a working internet connect"
      );
  }
}


  render () {
    // Check that all form inputs are valid
    // const validateForm = () => {
    //   const inputs = document.querySelector('#loginForm input')
    //   for (let i = 0; i < inputs.length; i++) {
    //     if (!inputs[i].checkValidity()) {
    //       inputs[i].reportValidity()
    //       return false
    //     }
    //   }
    //   return true
    // }

    // // Handle form submission
    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   if (validateForm()) {
    //     // server call goes here to handle log in attempt
    //     // temporary view to see home page as logged in
    //     // logging in and out will be handled by server calls in future
    //     const username = document.querySelector("input[name='username']").value
    //     const password = document.querySelector("input[name='password']").value
    //     if (username === 'admin' && password === 'admin') {
    //       window.open('/admin', '_self')
    //     } else if (username === 'user' && password === 'user') {
    //       window.open('/loggedIn', '_self')
    //     }
    //   }
    // }
    const { app } = this.props


    return (
      <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form.Group
                        id="login-form"
                        className="mx-auto"
                        // onSubmit={this.handleSubmit}
                    >
                        <Form.Control
                            className="my-3 mx-auto"
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => this.handleOnChangeEmail(e.target.value)}
                            required
                        />
                        <Form.Control
                            className="my-3"
                            type="password"
                            name="password"
                            placeholder="Password"
                            minLength="6"
                            onChange={(e) => this.handleOnChangePassword(e.target.value)}
                            required
                        />
                         <Button
                            className="my-3 d-block mx-auto"
                            variant="customOrange"
                            type="submit"
                            value="Login"
                            onClick={(e) => this.handleSubmit(e, app)}
                        >
                            Login
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Login
