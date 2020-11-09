import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

class Ads extends React.Component {

  handleAdClick = (id) => {
    this.props.handleClick(id)
  }

  render () {
    const { id, name, price, rating, description} = this.props;

    return (
      <div className='ads' >
        <div className='adImage' onClick={() => this.handleAdClick(id)}>
          <img src={img} alt='Motorcycle'></img>
        </div>
        <div className='adContents'>
          <span class="adCardTitle"><strong>Name</strong>: {this.props.name}</span>
          <span class="adCardTitle"><strong>Price</strong>: ${this.props.price} / day </span>
          
        </div>
      </div>
      
    )
  }
}

export default Ads