import React from 'react'

import './style.css'
import { FormControl, TextField, Button} from '@material-ui/core';
import { Alert } from '@material-ui/lab';


class PostAdInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            price: null,
            fromAvaliability: null,
            toAvaliability: null,
            pickupLocation: null,
            driversLicense: null,
            description: null,
        }
    }

    onFormSubmission = () => {
        
        let validatedInfo = this.validateInputData()

        // Take page to PostedAds to view newly added Ad. 

        // Server call to update database for storing ads if Validation successfull


    }   

    validateInputData = () => {
        // Server Calls and using APIs to validate user information

    } 

    render () {

        return (
            <div id="postAdInfo">
                <form >
                    <FormControl required >
                        <TextField
                            required
                            id="filled-helperText"
                            label="Name of Vehicle"
                            value={this.state.name}
                            variant="filled"
                            />
                        <br />
                        <TextField
                            required
                            id="filled-helperText"
                            label="Price"
                            value={this.state.price}
                            variant="filled"
                            />
                        <br />
                        <div id='bikeAvailability'>
                            <span id="labelTitle">Availabilty   </span>
                            <label>From: </label>
                            <input id="fromAvaliability" type='date' value={this.state.fromAvaliability} required />
                            <label>To: </label>
                            <input id="toAvaliability" type='date' value={this.state.toAvaliability} required />
                        </div>
                        <br />
                        <TextField
                            required
                            id="filled-helperText"
                            label="Location"
                            value={this.state.pickupLocation}
                            variant="filled"
                            />
                        <br />
                        <TextField
                            required
                            id="filled-helperText"
                            label="Drivers License"
                            value={this.state.diversLicense}
                            variant="filled"
                            />
                        <br />
                        <TextField
                            required
                            id="filled-helperText"
                            label="Description"
                            value={this.state.description}
                            helperText="Please state the condition your vehicle is in."
                            multiline
                            rows={10}
                            variant="filled"
                            />
                        <br />
                        <Button type="submit" fullWidth
                            variant="contained"
                            color="primary"
                            onClick={() => this.onFormSubmission()}
                            >
                                Post Ad
                            </Button>
                                
                    </FormControl>
                </form>
            </div>
        )
    }
}

export default PostAdInfo