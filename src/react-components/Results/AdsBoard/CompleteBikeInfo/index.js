import React from 'react'

import './style.css'
import img from './../../static/motorcycle.jpg'
import NavBar from '../../../NavBar'

class CompleteDescription extends React.Component {

  render () {

    const { id, description } = this.props;

    return (
    	<div class="completeAd">
	    	<NavBar />
	    	<div className="modifiedContainer">
		    	<h2>Harley Davidson</h2>
		    	<div className="row">
		    	<div className="col s12 m12 l6">
		    		<div className="imgDiv">
		    			<img src={img} className="imgObj" />
		    		</div>
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
		    		</div>

		    	</div>
		    	</div>
	    	</div>
    	</div>
    	);
  }
}

export default CompleteDescription