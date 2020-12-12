import React from 'react'

import './style.css'

import AdsBoard from './AdsBoard'
import NavBar from '../NavBar'
import Footer from '../Footer1'
import { searchBikes } from '../../actions/bike'


// eslint-disable-next-line
const getAdData = event => {
    event.preventDefault()
        // server call goes here to get Ad Data
}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ads: []
        }
    }
    componentDidMount() {
        const payload = {
            location: this.props.match.params.location,
            availabilityStart: this.props.match.params.pickup,
            availabilityEnd: this.props.match.params.dropoff
        }
        searchBikes(this, payload)

    }

    createSampleAds() {
        // const ads = this,
        // // sample data for now, api call goes below!
        // const results = [{
        //         reviews: [
        //             "Review string"
        //         ],
        //         prevRenters: [],
        //         _id: "5fd291fbc732a14b0883f7bd",
        //         name: "name string",
        //         price: 10,
        //         location: "new location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "new image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 1,
        //         rating: 5
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e633604f214d40b220e9",
        //         name: "kawasaki",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e642604f214d40b220ea",
        //         name: "motoshare",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e6a0604f214d40b220eb",
        //         name: "Harley Davidson",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [
        //             "Review string"
        //         ],
        //         prevRenters: [],
        //         _id: "5fd291fbc732a14b0883f7bd",
        //         name: "name string",
        //         price: 10,
        //         location: "new location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "new image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 1,
        //         rating: 5
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e633604f214d40b220e9",
        //         name: "kawasaki",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e642604f214d40b220ea",
        //         name: "motoshare",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e6a0604f214d40b220eb",
        //         name: "Harley Davidson",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [
        //             "Review string"
        //         ],
        //         prevRenters: [],
        //         _id: "5fd291fbc732a14b0883f7bd",
        //         name: "name string",
        //         price: 10,
        //         location: "new location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "new image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 1,
        //         rating: 5
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e633604f214d40b220e9",
        //         name: "kawasaki",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e642604f214d40b220ea",
        //         name: "motoshare",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e6a0604f214d40b220eb",
        //         name: "Harley Davidson",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [
        //             "Review string"
        //         ],
        //         prevRenters: [],
        //         _id: "5fd291fbc732a14b0883f7bd",
        //         name: "name string",
        //         price: 10,
        //         location: "new location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "new image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 1,
        //         rating: 5
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e633604f214d40b220e9",
        //         name: "kawasaki",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e642604f214d40b220ea",
        //         name: "motoshare",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     },
        //     {
        //         reviews: [],
        //         prevRenters: [],
        //         _id: "5fd2e6a0604f214d40b220eb",
        //         name: "Harley Davidson",
        //         price: 5,
        //         location: "location details",
        //         licence: "licence plate string",
        //         description: "Description of Bike",
        //         image_id: "image_id string",
        //         image_url: "image_url string",
        //         owner: "5fd28ef0c732a14b0883f7bb",
        //         __v: 0
        //     }]
        // for (let i = 0; i < results.length; i++) {
        //     ads.push({
        //         id: i,
        //         name: results[i].name,
        //         img_id: results[i].img_id,
        //         img_url: results[i].img_url,
        //         price: results[i].price,
        //         location: results[i].location
        //     })
        // }
        return this.state.ads
    }

    render() {
        // console.log(this.state.)
        return (
            <div id = 'postedAds' >
            <NavBar />
            <div className="container">
              {this.createSampleAds().length === 0 ? <div id="results"><h1>No Bikes Found :(</h1></div> : <AdsBoard ads = { this.createSampleAds() }/>}
            </div>
            <Footer />
            </div>
        )
    }
}

export default Results
