import React from 'react'

import './style.css'
import Ads from './Ads'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import $ from 'jquery';

class AdsBoard extends React.Component {

  constructor(props) {
    super(props);
    // React Ref is created here
    this.adRef = React.createRef();
  }

  scrollAds = (direction) => {
    if (direction === 'right') {
      if (this.adRef !== null) {
        (this.adRef.current.scrollLeft += 200)
      }
    } else {
      if (this.adRef !== null) {
        (this.adRef.current.scrollLeft -= 200)
      }
    }
  }

  state = {}

  render () {

    const { ads } = this.props 

    const adElements = []

    for (let i = 0; i < this.props.ads.length; i++) {
      const currAd = this.props.ads[i]
      adElements.push(<Ads id={currAd.id} name={currAd.name} price={currAd.price} rating={currAd.rating} description={currAd.description} />)
    }

    return (
      <div id='adsBoard'>
        <h1>View Your Ads</h1>
        <div id="filter-ads">
          
        </div>
        <div id="ads-carousal">
          <button onClick={() => this.scrollAds('left')}><ArrowBackIosIcon id='icon-left' /></button>
          <div id="adsView1" ref={this.adRef}>
            {adElements}
          </div>
          <button onClick={() => this.scrollAds('right')}><ArrowForwardIosIcon id='icon-right' /></button>
        </div>
        <div id="ad-info">
          
        </div>
      </div>
    )
  }
}

export default AdsBoard