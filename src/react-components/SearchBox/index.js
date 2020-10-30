import React from 'react'

import SearchForm from '../SearchForm'
import './style.css'

class SearchBox extends React.Component {
  render () {
    return (
      <div id='searchBox'>
        <h3>Search Motorcycles:</h3>
        <SearchForm />
      </div>
    )
  }
}

export default SearchBox
