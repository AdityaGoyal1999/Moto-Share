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

                return ( <
                    div id = 'adsBoard' >
                    <
                    input type = "text"
                    placeholder = "Red Bike"
                    className = "searchBar" / >
                    <
                    h3 > Your search Results < /h3> <
                    div id = "adsView" > { adElements } <
                    /div> <
                    /div>
                )
            }
        }

        export default AdsBoard