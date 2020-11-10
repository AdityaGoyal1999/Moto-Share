import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import NavBar from '../../../NavBar'

import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css'

class CompleteDescription extends React.Component {

  render () {

    const { id, description } = this.props;

    return (
    	<div className="completeAd">
	    	<NavBar />
	    	<div className="modifiedContainer">
		    	<h2>Harley Davidson</h2>
		    	<div className="row">
		    	<div className="col s12 m12 l6">
		    		<div className="imgDiv">
		    			<img src={img} className="imgObj" alt='Motorcycle' />
		    		</div>
		    		<a href="../User">
		    		<div className="SellerInfo">
		    			<div className="row">
	    					<div className="col s12 m12 l4">
	    						<img src='/person.jpg' className="imgSeller" alt='Seller' />
	    					</div>
	    					<div className="col s12 m12 l8">
	    					 <span id="SellerName">Jane Doe</span><br /><span className="Rating"></span>
	    					 <span className="textNonBold">4.9 <i className="material-icons icon-gold">star</i><span className="reviewCount">(20)</span></span>
	    					</div>
		    			</div>
		    		</div>
		    		</a>
		    	</div>
		    	<div className="col s12 m12 l6">
		    		<div className="container">
		    			<div className="textLine">
		    				<span className="textBold">Owner</span> <span className="textNonBold">Aditya Goyal</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Location</span> <span className="textNonBold">321 Bloor Street West,<br /> Toronto, Canada.</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Price</span> <span className="textNonBold">$100 per day</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Rating</span> <span className="textNonBold">4.9 <i className="material-icons icon-gold">star</i><span className="reviewCount">(20)</span></span>
		    			</div>
		    			<div id="CommentHeading">
		    				<span className="textBold">Comments</span>
		    			</div>
		    			<div className="comment">
		    				<div className="senderName">
		    				John Doe
		    				</div>
		    				<div className="commentContent">
		    					Amazing bike and even better seller!
		    				</div>
		    			</div>

		    			<div className="comment">
		    				<div className="senderName">
		    				Jane Doe
		    				</div>
		    				<div className="commentContent">
		    					Absolute head turner!
		    				</div>
		    			</div>

		    		</div>

		    	</div>
		    	</div>
	    	</div>
    	</div>
    	);
  }
}

export default CompleteDescription