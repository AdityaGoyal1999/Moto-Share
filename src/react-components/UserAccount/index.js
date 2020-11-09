import React from 'react'

import './style.css'
import img from '../Results/static/motorcycle.jpg'
import NavBar from '../NavBar'

class User extends React.Component {

  render () {

    return (
    	<div class="completeAd">
	    	<NavBar />
	    	<div className="modifiedContainer">
		    	<h2>Jane Doe</h2>
		    	<div className="row">
		    	<div className="col s12 m12 l4">
		    		<div className="imgDiv">
		    			<img src='/person.jpg' className="imgObj" />
		    		</div>
		    	</div>
		    	<div className="col s12 m12 l6">
		    		<div className="container">

		    			<div className="textLine">
		    				<span className="textBold">Location</span> <span className="textNonBold">321 Bloor Street West,<br /> Toronto, Canada.</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">Rented To</span> <span className="textNonBold">50 people</span>
		    			</div>

		    			<div className="textLine">
		    				<span className="textBold">No. of Bkes</span> <span className="textNonBold">3</span>
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
		    					Jane is absolutely a delite rent from.
		    				</div>
		    			</div>

		    			<div className="comment">
		    				<div className="senderName">
		    				Jane Doe
		    				</div>
		    				<div className="commentContent">
		    					Really helpful
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

export default User