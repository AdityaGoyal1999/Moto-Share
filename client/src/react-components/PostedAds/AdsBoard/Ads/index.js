import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from '@material-ui/core'
import 'fontsource-roboto';

/* A card like component thats show information about a single ad and User has ability to delete it */
class Ads extends React.Component {

  handleAdClick = (id) => {
    this.props.handleClick(id)
  }

  /* Handle request to delete ad*/
  deleteAd = (id, bike_id) => {
    this.props.deleteAd(id, bike_id)
  }

  render () {
    const { id, name, price, bike_id} = this.props;

    return (
      <div className='adsUser' >
        {/* Shows image of ad*/}
        <div className='adImage' onClick={() => this.handleAdClick(id)}>
          <img src={img} alt='Motorcycle'></img>
        </div>
        {/* Shows some info about ad  */}
        <div className='adContents'>
          <span className="adCardTitle"><strong>Name</strong>: {name}</span>
          <span className="adCardTitle"><strong>Price</strong>: $ {price} / day </span>
        </div>
        {/* Delete button */}
        <Link href="#" ><DeleteIcon color="primary" onClick={() => this.deleteAd(id, bike_id)}/> </Link>
      </div>
      
    )
  }
}

export default Ads