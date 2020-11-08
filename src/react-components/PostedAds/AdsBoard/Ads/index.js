import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

class Ads extends React.Component {

  render () {

    const { id, name, price, rating, description } = this.props;

    return (
      <div className='ads'>
        <div className='adImage'>
          <img src={img} alt='Motorcycle'></img>
        </div>
        <div className='adContents'>
          {this.props.name} <br />
          {this.props.rating}
        </div>
      </div>
    )
  }
}

export default Ads