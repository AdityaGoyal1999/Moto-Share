import React from 'react'

import './style.css'
import { FormControl, TextField, Button} from '@material-ui/core';

/* Text and Date Input Submission Component*/
class PostAdInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            price: undefined,
            fromAvaliability: undefined,
            toAvaliability: undefined,
            pickupLocation: undefined,
            driversLicense: undefined,
            description: undefined,
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
                        {/* Name Input */}
                        <TextField
                            required
                            id="filled-helperText"
                            label="Name of Vehicle"
                            value={this.state.name}
                            variant="outlined"
                            />
                        <br />
                        {/* Price Input */}
                        <TextField
                            required
                            id="filled-helperText"
                            label="Price"
                            value={this.state.price}
                            variant="outlined"
                            />
                        <br />
                        {/* Availability Input */}
                        <div id='bikeAvailability'>
                            <span id="labelTitle">Availabilty   </span>
                            <label>From: </label>
                            <input id="fromAvaliability" type='date' value={this.state.fromAvaliability} required />
                            <label>To: </label>
                            <input id="toAvaliability" type='date' value={this.state.toAvaliability} required />
                        </div>
                        <br />
                        {/* Location Input (Note: Might be changed later depending on API validation) */}
                        <TextField
                            required
                            id="filled-helperText"
                            label="Location"
                            value={this.state.pickupLocation}
                            variant="outlined"
                            />
                        <br />
                        {/* Drivers License Input */}
                        <TextField
                            required
                            id="filled-helperText"
                            label="Drivers License"
                            value={this.state.diversLicense}
                            variant="outlined"
                            />
                        <br />
                        {/* Description Input */}
                        <TextField
                            required
                            id="filled-helperText"
                            label="Description"
                            value={this.state.description}
                            helperText="Please state the condition your vehicle is in."
                            multiline
                            rows={10}
                            variant="outlined"
                            />
                        <br />
                        {/* Submit Button */}
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