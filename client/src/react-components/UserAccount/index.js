import React from 'react'

import './style.css'
import img from '../Results/static/motorcycle.jpg'
import NavBar from '../NavBar'
import Footer from '../Footer1'
import {getUserByID} from '../../actions/user'
import { Alert } from "react-bootstrap";

class User extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			user_id: null,
			name: null,
			location: null,
			rentedTo: null,
			rating: null,
			bikes: [],
			reviews: []
		}
		
		getUserByID(this, this.props.match.params.id)
		
	}

  	render () {
		const {name, location, rentedTo, rating, bikes, reviews} = this.state
		return (
			<div className="completeAd">
				<NavBar loggedIn={true}/>
				<div className="modifiedContainer">
		<h2>{name}</h2>
					<div className="row">
					<div className="col s12 m12 l4">
						<div className="imgDiv">
							<img src='/person.jpg' className="imgObj" alt='profile' />
						</div>
					</div>
					<div className="col s12 m12 l6">
						<div className="container">

							<div className="textLine">
		<span className="textBold">Location</span> <span className="textNonBold">{location}</span>
							</div>

							<div className="textLine">
		<span className="textBold">Rented To</span> <span className="textNonBold">{rentedTo} people</span>
							</div>

							<div className="textLine">
		<span className="textBold">No. of Bikes</span> <span className="textNonBold">{bikes.length}</span>
							</div>

							<div className="textLine">
		<span className="textBold">Rating</span> <span className="textNonBold">{rating}<i className="material-icons icon-gold">star</i></span>
							</div>
							<div id="CommentHeading">
								<span className="textBold">Comments</span>
							</div>
							<div id="comments">
								{reviews.map(review => { return <div className="comment"><div className="commentContent"> {review}</div></div> })}
							</div>
						</div>

					</div>
					</div>
				</div>
				<Footer />
			</div>
			);
	}
}

export default User