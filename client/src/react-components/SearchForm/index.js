import React from 'react'
import { Button, Link } from '@material-ui/core'
import {withRouter} from 'react-router-dom';

import './style.css'

class SearchForm extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      location: null,
      pickup: null,
      dropoff: null
    }

    // this.props.history.push('/')

  }

  onChangeLocation = (location) => {
    this.setState((state) => {
        return{
            ...state,
            location: location,
        }
    })
  }

  onChangePickup = (pickup) => {
    this.setState((state) => {
        return{
            ...state,
            pickup: pickup,
        }
    })
  }

  onChangeDropoff = (dropoff) => {
    this.setState((state) => {
        return{
            ...state,
            dropoff: dropoff,
        }
    })
  }
  clickHandler = () => {
      // server call will go here to handle search
      // window.open('/results', '_self')
      const location = document.querySelector("input[name='location']").value
      const pickup = document.querySelector("input[name='pickup']").value
      const dropoff = document.querySelector("input[name='dropoff']").value
      this.props.history.push(`/results/${location}/${pickup}/${dropoff}`)
      
    }
  render () {
    

    return (
      <form id='searchForm'>
        <div id='locInput'>
          <label>Location: </label>
          <input type='text' name="location" placeholder='Enter location here' onChange={this.onChangeLocation} required />
        </div>

        <div className='timeInput'>
          <label>    Pickup Date: </label>
          <input type='date' name="pickup" onChange={this.onChangePickup} required />
        </div>

        <div className='timeInput'>
          <label>    Dropoff Date: </label>
          <input type='date' name="dropoff" onChange={this.onChangeDropoff} required />
        </div>

        {/* Will call server to handle search, proceed to Results page */}
        <Button onClick={() => this.clickHandler()}>Search</Button>
      </form>
    )
  }
}

export default SearchForm
