import React from 'react'
// import { Button } from '@material-ui/core'
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import {addUser, login} from '../../actions/user'

import './style.css'

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
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form.Group
                        id="registration-form"
                        className="mx-auto"
                        onFormSubmit={this.handleSubmit}
                    >
                        <Form.Control
                            className="my-3 mx-auto"
                            type="text"
                            name="email"
                            placeholder="username"
                            onChange={(e) => this.handleOnChangeEmail(e.target.value)}
                            required
                        />
                        <Form.Control
                            className="my-3"
                            type="password"
                            name="confirm_password"
                            placeholder="password"
                            minLength="4"
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
