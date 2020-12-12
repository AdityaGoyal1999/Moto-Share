import React from 'react'

import './style.css'
import NavBar from '../../../NavBar'
import Footer from '../../../Footer1'
import {rentBikeById} from '../../../../actions/bike'

import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css'

class CompleteDescription extends React.Component {

	rentBike = (bike) => {
		// api call goes here this.props.match.params.id
		const currentUser = '5fd3c27046cd40375c8c7bce'
		try {
			rentBikeById(bike._id, currentUser)
			alert('Bike rented! Enjoy your ride!!')
			this.props.history.push('/loggedIn')
		} catch (error) {
			console.log('an error occurred when renting', error)
		}
	}

  render () {
		// put api call here, assign to bike object
		// need bike id and current user id props!!!
		const bike = {
			"reviews": ["Great bike! Such a smooth ride!", "It was alright I guess..."],
			"prevRenters": [],
			"_id": "5fd291fbc732a14b0883f7bd",
			"name": "Bike",
			"price": 5,
			"availabilityStart": "2020-02-02T00:00:00.000Z",
			"availabilityEnd": "2020-02-03T00:00:00.000Z",
			"location": "Winnipeg",
			"licence": "ksdjnf",
			"description": "A real good bike",
			"image_id": "yeirxbewxirapk6lzyd6",
			"image_url": "http://res.cloudinary.com/jblcloud/image/upload/v1607713508/yeirxbewxirapk6lzyd6.png",
			"owner": "5fd3c27046cd40375c8c7bce",
			"rating": 4
		}
		
		// put api call here, assign to user object
		const user = {
			"reviews": [],
			"bikes": [
					"5fd3c2f846cd40375c8c7bcf"
			],
			"_id": "5fd3c27046cd40375c8c7bce",
			"email": "a@a.com",
			"password": "$2a$10$gaZWRhxivVyhoVdNEmpXN.NrPS98AUU.a9QGTLFKWpnLL1dM4853O",
			"name": "Julien",
			"location": "",
			"rating": 0,
			"rentedTo": 0,
			"__v": 0
		}

    return (
    	<div className="completeAd">
	    	<NavBar />
	    	<div className="modifiedContainer">
		    	<h2>{bike.name}</h2>
		    	<div className="row">
		    	<div className="col s12 m12 l6">
		    		<div className="imgDiv">
		    			<img src={bike.image_url} className="imgObj" alt='Motorcycle' />
		    		</div>
		    		<a href="../User">
		    		<div className="SellerInfo">
		    			<div className="row">
	    					<div className="col s12 m12 l4">
	    						<img src={user.image_url} className="imgSeller" alt='Seller' />
	    					</div>
	    					<div className="col s12 m12 l8">
	    					 <span id="SellerName">{user.name}</span><br /><span className="Rating"></span>
	    					 <span className="textNonBold">4.9 <i className="material-icons icon-gold">star</i><span className="reviewCount">(20)</span></span>
	    					</div>
		    			</div>
		    		</div>
		    		</a>
		    	</div>
		    	<div className="col s12 m12 l6">
		    		<div className="container">
		    			<div className="textLine">
		    				<span className="textBold">Owner</span> <span className="textNonBold">{user.name}</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Location</span> <span className="textNonBold">{bike.location}</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Price</span> <span className="textNonBold">{bike.price}</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Rating</span> <span className="textNonBold">{bike.rating} <i className="material-icons icon-gold">star</i><span className="reviewCount">({bike.reviews.length})</span></span>
		    			</div>
		    			<div id="CommentHeading">
		    				<span className="textBold">Comments</span>
		    			</div>

							{bike.reviews.map(review => (
								<div className="comment">
									<div className="commentContent">
										{review}
									</div>
								</div>
							))}

							<button className='rentButton btn waves-effect waves-light' onClick={() => this.rentBike(bike)}>Rent Bike!</button>

		    		</div>

		    	</div>
		    	</div>
	    	</div>
	    	<Footer />
    	</div>
    	);
  }
}

export default CompleteDescription