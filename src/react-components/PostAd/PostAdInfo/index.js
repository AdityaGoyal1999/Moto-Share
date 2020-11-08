import React from 'react'

import './style.css'
import TextField from '@material-ui/core/TextField';

class PostAdInfo extends React.Component {

    render () {
        return (
            <div id='post_ad_info'>
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
            </div>
        )
    }
}

export default PostAdInfo