import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'

class Ads extends React.Component {

  render () {

    const { id, description } = this.props;

    return (
      <div id='ads'>
        <div id='adImage'>
          <img src={img} alt='Motorcycle'></img>
        </div>
        <div id='adContents'>
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default Ads