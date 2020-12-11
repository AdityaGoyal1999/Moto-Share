import React from 'react'
// import { Button } from '@material-ui/core'
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import {addUser, login} from '../../actions/user'

import './style.css'

// <form id='signupForm'>
//   <label>Username:</label>
//   <input type='text' name='username' placeholder='Enter username' required onChange={}/>
//   <label>Date of Birth: </label>
//   <input type='date' name='date' placeholder='yyyy-mm-dd' required onChange={}/>
//   <label>Email:</label>
//   <input className='email' name='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' required onChange={}/>
//   <label>Confirm Email:</label>
//   <input className='email' type='text' placeholder='someone@example.com' pattern='.+@.+\..+' onChange={validateEmail} required />
//   <label>Password:</label>
//   <input className='password' name='password' type='password' placeholder='Enter password' minLength='8' required onChange={}/>
//   <label>Confirm Password:</label>
//   <input className='password' type='password' placeholder='Confirm password' minLength='8' onChange={validatePassword} required />
//   <Button onClick={handleSubmit}>Sign Up</Button>
//   <label className='errorMessage'>Error: Username and Password not found</label>
// </form>
// The signup form
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            name: null,
            location: null,
            image_id: null,
            image_url: null
        }
    }
    handleOnChangeEmail = (new_email) => {
        this.setState((state) => {
            return{
                ...state,
                email: new_email,
            }
        })
    }

    handleOnChangeName = (new_name) => {
        this.setState((state) => {
            return {
                ...state,
                name: new_name,
            };
        });
    };

    handleOnChangePassword = (new_password) => {
        this.setState((state) => {
            return {
                ...state,
                password: new_password,
            };
        });
    };

    handleOnChangeLocation = (new_location) => {
        this.setState((state) => {
            return {
                ...state,
                location: new_location,
            };
        });
    };

    handleSubmit = async (event) => {
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     return;
        // }
        const payload = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        };
        try {
            console.log("signup")
            addUser(payload)
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
                    if (json !== 500) {
                        this.props.history.push("/loggedIn");
                    } else {
                        console.log("inside second then else condition ")
                        window.location.reload(false)
                    }
                })
                .catch(error => {
                    console.log(error)
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
      // const validateInitalEmail
    // Check if the entered emails match
    // const validateEmail = () => {
    //     // check if this is unique
    //     // make api call to db to get all users with matching email, if none go ahead
    //   const inputs = document.querySelectorAll('.email')
    //   if (inputs[0].value !== inputs[1].value) {
    //     inputs[1].setCustomValidity('Does not match given email')
    //     return false
    //   } else {
    //     inputs[1].setCustomValidity('')
    //     return true
    //   }
    // }
    //
    // // Check if the entered passwords match
    // const validatePassword = () => {
    //   const inputs = document.querySelectorAll('.password')
    //   if (inputs[0].value !== inputs[1].value) {
    //     inputs[1].setCustomValidity('Does not match given password')
    //     return false
    //   } else {
    //     inputs[1].setCustomValidity('')
    //     return true
    //   }
    // }
    //
    // // Validate all form inputs
    // const validateForm = () => {
    //   // checks default and custom validation, returns true if valid form inputs
    //   const inputs = document.getElementsByTagName('input')
    //   for (let i = 0; i < inputs.length; i++) {
    //     if (!inputs[i].checkValidity()) {
    //       inputs[i].reportValidity()
    //       return false
    //     }
    //   }
    //   return true
    // }
    //


    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form.Group
                        id="registration-form"
                        className="mx-auto"
                        onSubmit={this.handleSubmit}
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
                            // onChange={(e) => this.handleOnChangePassword(e.target.value)}
                            required
                        />
                        <Form.Control
                            className="my-3"
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm password"
                            minLength="6"
                            onChange={(e) =>
                                this.handleOnChangePassword(e.target.value)
                            }
                            required
                        />
                        <Form.Control
                            className="my-3"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            onChange={(e) => this.handleOnChangeName(e.target.value)}
                            required
                        />
                        <Form.Control
                            className="my-3"
                            type="text"
                            name="location"
                            placeholder="Location"
                            onChange={(e) => this.handleOnChangeLocation(e.target.value)}
                            required
                        />
                        <Button
                            className="my-3 d-block mx-auto"
                            variant="customOrange"
                            type="submit"
                            value="Register"
                            onClick={(e) => this.handleSubmit(e)}
                        >
                            Register
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Signup
