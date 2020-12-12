import React from 'react'

import './style.css'
import AdsBoard from './AdsBoard'
import NavBar from '../NavBar'
import Footer1 from '../Footer1'
import {getBikesRentedTo} from '../../actions/bike'

// eslint-disable-next-line
const getRentedBikes = event => {
  event.preventDefault()
  // SERVER CALL goes here to get Ad Data
  uid = this.props.currentUser || '5fd3c27046cd40375c8c7bce'
  bikes = getBikesRentedTo(uid)
}

/* Component that shows all the Ads that the User has posted*/
class PostedAdsPage extends React.Component {
  
  constructor(props) {
    super(props)

    // These will be SERVER CALL to get the acutal data:
    // {saleInfo, ads} = getUserData()

    this.state = {
      bikes_ids: [],
      bikes_info: [],
      num_bikes: null,
      rendered: false
		}
		
		// getUserBikesByID(this, this.props.currentUser)


    // for(let i = 0; i < this.state.bikes_ids.length; i++) {
    //   getBikeByID(this, this.state.bikes_ids[i]) 
    // }

    // console.log(this.state.bike_info)
  }

  async componentDidMount() {
    await getUserBikesByID(this, this.props.currentUser)
    // console.log(this.state.bikes_info)
    // this.setState({
    //   data: [...this.state.data, this.data()[0], this.data()[0] ]
    // })

  }


  /* Creating sample data for testing purposes (NOTE: Numerical values are random) */
  createSampleData () {

    // This data comes from this.state.ads
    const names = ['Honda Super Cub', 'Honda CB77', 'Triumph Bonneville', 'Honda CB750', 'Harley-Davidson XR750', 'Kawasaki Triple', 'Ducati 900SS', 'BMW R100S', 'Yamaha XT500']
    const prices = [20, 30, 40, 25, 15, 50, 34, 26, 43, 53]
    const ratings = [4.0, 3.5, 5.0, 4.3, 4.2, 4.1, 5.0, 3.6, 3.2, 4.7]

    // This data will come from this.state.userInfo
    const numBikeSold = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const totalBikeTips = [0, 20, 30, 10, 40, 90, 80, 200, 400, 500]
    const totalBikeDays = [3, 4, 8, 10, 12, 14, 15, 16, 20, 30]

    const ads = []
    const saleInfo = []

    // Adding all the sample data to be pushed to child components
    for (let i = 0; i < 9; i++) {
      ads.push({id:i, name:names[i], price:prices[i], rating:ratings[i], description:'Red Motorcycle with 2 wheels. In good condition.'})
      const totalEarning = totalBikeTips[i] + (totalBikeDays[i] * prices[i])
      saleInfo.push({numSold:numBikeSold[i], totalTips:totalBikeTips[i], totalDays:totalBikeDays[i], totalEarnings:totalEarning})
    }
    return [ads, saleInfo];
  }

  /* Creating sample data for testing purposes (NOTE: Numerical values are random) */
  data () {


    // This data comes from this.state.ads
    const names = this.state.bikes_info.map(bike => bike.name)
    const prices = this.state.bikes_info.map(bike => bike.price)
    const description = this.state.bikes_info.map(bike => bike.description)

    // console.log(names, prices, description)
    // This data will come from this.state.userInfo
    const numBikeSold = this.state.bikes_info.map(bike => bike.prevRenters.length)
    const licence = this.state.bikes_info.map(bike => bike.licence)
    const location = this.state.bikes_info.map(bike => bike.location)

    const ads = []
    const saleInfo = []

    // Adding all the sample data to be pushed to child components
    for (let i = 0; i < this.state.bikes_info.length; i++) {
      const bike_id = this.state.bikes_info[i]._id
      ads.push({id:i, bike_id:bike_id, name:names[i], price:prices[i], description:description[i]})
      // const totalEarning = (totalBikeDays[i] * prices[i])
      saleInfo.push({numSold:numBikeSold[i], licence:licence[i], location:location[i]})
    }
    return [ads, saleInfo];
  }
  
    render () {
    return this.state.bikes_info.length === this.state.num_bikes ? (
      <div id='postedAds'>
        <NavBar />
        <AdsBoard ads={this.data()[0]} saleInfo={this.data()[1]} />
        <Footer1 />
      </div>
    ) : <div>Loading Your Page</div>
  }
}

export default PostedAdsPage