import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'


class Ads extends React.Component {

  render () {

    const { id, description } = this.props;

    return (
            <div class="col s12 m12 l4">
            <a className="cardHover" href="./CompleteBikeInfo">
            <div class="card">
              <div class="card-image">
                <img id="adImg" src={img} />
              </div>
              <div class="card-content">
                <span class="card-title">{this.props.description}</span>
                <p><b>$100 per day</b><br /> 321, Bloor Street,<br /> Toronto.</p>
              </div>
            </div>
            </a>
            </div>
    )
  }
}

export default Ads