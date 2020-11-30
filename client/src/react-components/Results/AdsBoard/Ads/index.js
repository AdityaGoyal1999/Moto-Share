import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'


class Ads extends React.Component {

  render () {

    return (
            <div className="col s12 m12 l4">
            <a className="cardHover" href="./CompleteBikeInfo">
            <div className="card">
              <div className="card-image">
                <img id="adImg" src={img} alt='ad' />
              </div>
              <div className="card-content">
                <span className="card-title">{this.props.description}</span>
                <p><b>$100 per day</b><br /> 321, Bloor Street,<br /> Toronto.</p>
              </div>
            </div>
            </a>
            </div>
    )
  }
}

export default Ads