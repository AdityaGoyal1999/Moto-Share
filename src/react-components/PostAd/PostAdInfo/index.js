import React from 'react'

import './style.css'
import { FormControl, TextField, Button} from '@material-ui/core';

class PostAdInfo extends React.Component {

    validateInputData = () => {
        
    } 

    render () {
        return (
            <div id="postAdInfo">
                <FormControl>
                    <TextField
                        id="filled-helperText"
                        label="Name of Vehicle"
                        variant="filled"
                        />
                    <br />
                    <TextField
                        id="filled-helperText"
                        label="Price"
                        variant="filled"
                        />
                    <br />
                    <div id='availability'>
                        <label>From: </label>
                        <input type='date' required />
                        <label>To: </label>
                        <input type='date' required />
                    </div>
                    <br />
                    <TextField
                        id="filled-helperText"
                        label="Drivers License"
                        variant="filled"
                        />
                    <br />
                    <TextField
                        id="filled-helperText"
                        label="Description"
                        helperText="Please state the condition your vehicle is in."
                        multiline
                        rows={10}
                        variant="filled"
                        />
                    <br />
                    <Button type="submit" fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.props.onSubmit}
                        >
                            Post Ad
                        </Button>
                            
                </FormControl>
            </div>
        )
    }
}

export default PostAdInfo