import React from 'react'

import './style.css'
import Ads from './Ads'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import easyScroll from 'easy-scroll';

class AdsBoard extends React.Component {

  constructor(props) {
    super(props);
    // React Ref is created here
    this.adRef = React.createRef();

    const { ads, userInfo } = this.props 
    this.state = {
      ads: ads,
      userInfo : userInfo
    }
  }

  updateAdInfo = (id) => {
    const ad = this.state.ads[id]
    console.log(ad.name)
    const adInfoDisplay = []
    adInfoDisplay.push(`<h2>Name: ${ad.name}</h2>`)
    
    document.getElementById("adDetails").innerHTML = adInfoDisplay

    return adInfoDisplay
  }

  showAds = () => {
    const adElements = []

    for (let i = 0; i < this.state.ads.length; i++) {
      const currAd = this.state.ads[i]
      adElements.push(
      <Ads id={currAd.id} 
           name={currAd.name} 
           price={currAd.price} 
           rating={currAd.rating} 
           description={currAd.description} 
           handleClick={this.updateAdInfo}
           />)
    }
    return adElements
  }


  scrollAds = (direction) => {
    if (direction === 'right') {
      if (this.adRef !== null) {
        easyScroll({
          'scrollableDomEle': document.getElementById("adsView1"),
          'direction': 'right',
          'duration': 300,
          'easingPreset': 'easeInQuad',
          'scrollAmount': 350
        });
      }
    } else {
      if (this.adRef !== null) {
        easyScroll({
          'scrollableDomEle': document.getElementById("adsView1"),
          'direction': 'left',
          'duration': 200,
          'easingPreset': 'easeInQuad',
          'scrollAmount': 350
        });
      }
    }
  }

  state = {}

  render () {

    const adElements = this.showAds()

    return (
      <div id='adsBoard'>
        <h1>View Your Ads</h1>
        <div id="filter-ads">

        </div>
        <div id="adsCarousal">
          <button onClick={() => this.scrollAds('left')}><ArrowBackIosIcon id='icon-left' /></button>
          <div id="adsView1" ref={this.adRef}>
            {adElements}
          </div>
          <button onClick={() => this.scrollAds('right')}><ArrowForwardIosIcon id='icon-right' /></button>
        </div>
        <div id="adInfo">
          <div id="userEarnings">
            
          </div>
          <div id="adDetails">
            
          </div>
        </div>
      </div>
    )
  }
}

export default AdsBoard