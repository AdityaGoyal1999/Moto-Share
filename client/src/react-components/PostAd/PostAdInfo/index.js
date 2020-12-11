import React from 'react'

import './style.css'
import { FormControl, TextField} from '@material-ui/core';
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { addBike } from '../../../actions/bike'

/* Text and Date Input Submission Component*/
class PostAdInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            price: null,
            fromAvaliability: null,
            toAvaliability: null,
            pickupLocation: null,
            driversLicense: null,
            description: null,
        }
        this.props.history.push('/postad')
    }

    handleOnChangeName = (name) => {
        this.setState((state) => {
            return{
                ...state,
                name: name,
            }
        })
    }

    handleOnChangePrice = (price) => {
        this.setState((state) => {
            return{
                ...state,
                price: price,
            }
        })
    }

    handleOnChangeFromAvail = (avail) => {
        this.setState((state) => {
            return{
                ...state,
                fromAvaliability: avail,
            }
        })
    }

    handleOnChangeToAvail = (avail) => {
        this.setState((state) => {
            return{
                ...state,
                toAvaliability: avail,
            }
        })
    }

    handleOnChangeLocation = (location) => {
        this.setState((state) => {
            return{
                ...state,
                pickupLocation: location,
            }
        })
    }

    handleOnChangeLicense = (license) => {
        this.setState((state) => {
            return{
                ...state,
                driversLicense: license,
            }
        })
    }

    handleOnChangeDescription = (description) => {
        this.setState((state) => {
            return{
                ...state,
                description: description,
            }
        })
    }

    onFormSubmission = (id) => {
        
        // this.validateInputData()

        // Take page to PostedAds to view newly added Ad. 

        // Server call to update database for storing ads if Validation successfull
        const payload = {
            name: this.state.name,
            price: this.state.price,
            avail_from: this.state.fromAvaliability,
            avail_to: this.state.toAvaliability,
            location: this.state.pickupLocation,
            licence_plate: this.state.driversLicense,
            description: this.state.description
        }
        console.log(id)
        addBike(payload, id)
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
                    this.props.history.push("/");
                }else{
                
                }
            })
            .catch(error => {
                console.log(error)
                // window.location.reload(false)
            });

    }   

    validateInputData = () => {
        // Server Calls and using APIs to validate user information

    } 

    render () {
        const {currentUser} = this.props
        return (
            <div id="postAdInfo">
                <Row>
                <Col md={{ span: 8, offset: 2 }}>
                <Form.Group>
                        {/* Name Input */}
                        <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" rows={3}
                                                required
                                                className="my-3 mx-auto"
                                                onChange={(e) => this.handleOnChangeName(e.target.value)} />
                        </Form.Group>
                        <br />
                        {/* Price Input */}
                        <Form.Group>
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" rows={3} 
                                                required
                                                className="my-3"
                                                onChange={(e) => this.handleOnChangePrice(e.target.value)}/>
                        </Form.Group>
                        <br />
                        {/* Availability Input */}
                        <div id='bikeAvailability'>
                            <span id="labelTitle">Availabilty   </span>
                            <label>From: </label>
                            <input id="fromAvaliability" type='date' onChange={(e) => this.handleOnChangeFromAvail(e.target.value)} required />
                            <label>To: </label>
                            <input id="toAvaliability" type='date' onChange={(e) => this.handleOnChangeToAvail(e.target.value)} required />
                        </div>
                        <br />
                        {/* Location Input (Note: Might be changed later depending on API validation) */}
                        <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" rows={3} 
                                                required
                                                className="my-3"
                                                onChange={(e) => this.handleOnChangeLocation(e.target.value)}/>
                        </Form.Group>
                        <br />
                        {/* Drivers License Input */}
                        <Form.Group>
                                <Form.Label>License</Form.Label>
                                <Form.Control type="text" rows={3} 
                                                required
                                                className="my-3"
                                                onChange={(e) => this.handleOnChangeLicense(e.target.value)}/>
                        </Form.Group>
                        <br />
                        {/* Description Input */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripton</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => this.handleOnChangeDescription(e.target.value)} />
                        </Form.Group>
                        <br />
                        {/* Submit Button */}
                        <Button type="submit" fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => this.onFormSubmission(currentUser)}
                            >
                                Post Ad
                            </Button>
                    </Form.Group>
                </Col>
                </Row>
            </div>
        )
    }
}

export default PostAdInfo