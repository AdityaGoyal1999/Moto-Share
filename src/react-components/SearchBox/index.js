import React from 'react'

import SearchForm from '../SearchForm'
import './style.css'

// Search functionality for main page
class SearchBox extends React.Component {
  render () {
    return (
      <div id='searchBox'>
        <h4>Search Motorcycles:</h4>
        <SearchForm />
      </div>
    )
  }
}

export default SearchBox
