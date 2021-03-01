import React from 'react'
import { Button } from '@material-ui/core'

import './style.css'

class SearchForm extends React.Component {
  render () {
    return (
      <form id='searchForm'>
        <div id='locInput'>
          <label>Location: </label>
          <input type='text' placeholder='Enter location here' required />
        </div>

        <div id='pickupInput'>
          <label>Pickup Time: </label>
          <input type='time' required />
          <label>    Pickup Date: </label>
          <input type='date' required />
        </div>

        <div>
          <label>Dropoff Time: </label>
          <input type='time' required />
          <label>    Dropoff Date: </label>
          <input type='date' required />
        </div>

        {/* Will call server to handle search, proceed to Results page */}
        <Button>Search</Button>
      </form>
    )
  }
}

export default SearchForm