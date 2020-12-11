import React from 'react'

import './style.css'


class Ads extends React.Component {

  render () {

    return (
            <div className="col s12 m12 l4">
            <a className="cardHover" href="./CompleteBikeInfo">
            <div className="card">
              <div className="card-image">
                <img id='bikeImg' src={this.props.image_url} alt='ad' />
              </div>
              <div className="card-content">
                <span className="card-title">{this.props.name}</span>
                <p><b>{this.props.price} per day</b><br />{this.props.location}</p>
              </div>
            </div>
            </a>
            </div>
    )
  }
}

export default Ads