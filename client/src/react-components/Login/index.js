import React from 'react'
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import {login} from '../../actions/user'

import './style.css'

// The login form
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: null,
        password: null,
    }
    this.props.history.push('/login')
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

handleSubmit = async (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
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
      login(payload)
          .then(res => {
              if (res.status === 200) {
                  // return a promise that resolves with the JSON body
                  return res.json();
              } else {
                  return res.status
              }
          })
          .then(json => {
              console.log("inside login json ", json)
              if (json !== 400){
                  this.props.history.push("/loggedIn");
              }else{
                  console.log("inside second then else condition ")
                  // document.querySelector("input[name='email']").value = ""
                  document.querySelector("input[name='password']").value = ""
                  document.querySelector("#incorrect").innerHTML = "Your login credentials could not be verified, please try again."
                  document.querySelector("input[name='password']").placeHolder = "Incorrect Password Try Again"
              }
          })
          .catch(error => {
              console.log(error)
              // window.location.reload(false)
          });
  } catch (error) {
      console.log("in second catch")
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
                    <p id="incorrect"> </p>
                    <Form.Group
                        id="login-form"
                        className="mx-auto"
                        // onFormSubmit={(e) => this.handleSubmit(e, app)}
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
