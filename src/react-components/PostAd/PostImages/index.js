import React from 'react'

import './style.css'
import AddIcon from '@material-ui/icons/Add';

/* Image input Component for Ad */
class PostImages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            file: null
        }
        this.previewImage = this.previewImage.bind(this)
    }

    /* This function allows the inputted image to stay */
    previewImage (e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }

    render () {
        return (
            <div id='post-images'>
                <input type="file" name="file" id="file" className="inputfile" onChange={this.previewImage} />
                <label for="file">
                    <img src={this.state.file}/>
                    <span id="addImageTitle"><AddIcon /> <br />Add Image</span>
                </label>
            </div>
        )
    }
}

export default PostImages