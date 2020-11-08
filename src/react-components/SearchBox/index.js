import React from 'react'

import SearchForm from '../SearchForm'
import './style.css'

// Search functionality for main page
class SearchBox extends React.Component {
  render () {
    return (
      <div id='searchBox'>
        <h2>Search Motorcycles:</h2>
        <SearchForm />
      </div>
    )
  }
}

export default SearchBox
