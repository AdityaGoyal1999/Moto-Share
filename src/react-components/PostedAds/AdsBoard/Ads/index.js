import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from '@material-ui/core'
import 'fontsource-roboto';

class Ads extends React.Component {

  handleAdClick = (id) => {
    this.props.handleClick(id)
  }

  deleteAd = (id) => {
    this.props.deleteAd(id)
  }

  render () {
    const { id, name, price, rating, description} = this.props;

    return (
      <div className='adsUser' >
        <div className='adImage' onClick={() => this.handleAdClick(id)}>
          <img src={img} alt='Motorcycle'></img>
        </div>
        <div className='adContents'>
          <span class="adCardTitle"><strong>Name</strong>: {this.props.name}</span>
          <span class="adCardTitle"><strong>Price</strong>: ${this.props.price} / day </span>
        </div>
        <Link href="#" ><DeleteIcon color="primary" onClick={() => this.deleteAd(id)}/> </Link>
      </div>
    )
  }
}

export default Ads