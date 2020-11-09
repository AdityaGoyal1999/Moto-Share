import React from 'react'

import './style.css'
import Ads from './Ads'

class AdsBoard extends React.Component {

        render() {

            const { ads } = this.props

            const adElements = []

            for (let i = 0; i < this.props.ads.length; i++) {
                const currAd = this.props.ads[i]
                adElements.push( < Ads id = { currAd.id }
                    description = { currAd.description }
                    />)
                }

            return ( 
                <div id = 'adsBoard' >
                    <div className="row search">
                        <div className="input-field col s10">
                          <input placeholder="Harley Davidson" id="search" type="text" className="validate" />
                          <label className="active" for="Search Bikes">Search Bikes</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Search
                        <i className="material-icons right">search</i>
                        </button>
                    </div>
                    
                    <h2> Results for "Harley Davidson" <span role='img' aria-label='bike emoji'>🏍️</span> </h2> 
                    <div id = "adsView" > 
                    <div className="row">
                        
                        { adElements } 
                        </div>
                    </div> 
                </div>
            );
    }
}

export default AdsBoard