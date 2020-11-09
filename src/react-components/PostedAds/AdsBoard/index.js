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

    const { ads, saleInfo } = this.props 
    this.state = {
      ads: ads,
      saleInfo : saleInfo
    }
  }

  updateAdInfo = (id) => {
    this.updateAdDetails(id)
    this.updateSaleInfo(id)
  }

  updateAdDetails = (id) => {

    const ad = this.state.ads[id]
    let adInfoDisplay = (`<h2>Name: </h2><span id="adTextInfo">${ad.name}</span>`) 
    adInfoDisplay += (`<h2>Price: </h2><span id="adTextInfo">$ ${ad.price} / day</span>`)
    adInfoDisplay += (`<h2>Rating: </h2><span id="adTextInfo">${ad.rating} / 5.0</span>`)
    adInfoDisplay += (`<h2>Description: </h2><span id="adTextInfo"> ${ad.description}</span>`)
    document.getElementById("adDetails").innerHTML = adInfoDisplay

  }

  updateSaleInfo = (id) => {

    
    const saleInfo = this.state.saleInfo[id]
    let saleInfoDisplay = `<h2>Number of Times Rented: </h2><span id="adTextInfo">${saleInfo.numSold} times</span>`
    saleInfoDisplay += (`<h2>Number of Days Rented: </h2><span id="adTextInfo">${saleInfo.totalDays} days</span>`)
    saleInfoDisplay += (`<h2>Total Tips: </h2><span id="adTextInfo">$ ${saleInfo.totalTips} </span>`)
    saleInfoDisplay += (`<h2>Total Earnings: </h2><span id="adTextInfo">$ ${saleInfo.totalEarnings} </span>`)
    document.getElementById("saleInfo").innerHTML = saleInfoDisplay

    //TODO: Add EDIT and DELETE AD buttons and functions
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
          <div id="adDetails">
          </div>
          <div id="saleInfo">
          </div>
        </div>
      </div>
    )
  }
}

export default AdsBoard