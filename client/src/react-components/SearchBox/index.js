import React from 'react'

import SearchForm from '../SearchForm'
import './style.css'

// Search functionality for main page
class SearchBox extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id='searchBox'>
        <h4>Search Motorcycles:</h4>
        <SearchForm  {...this.props} />
      </div>
    )
  }
}

export default SearchBox
