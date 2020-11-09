import React from 'react'

import './style.css'
import {Typography, Link} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class Footer1 extends React.Component {
  render () {

    return (
      <div id='footer1'>
        <div id="footerInfo">
          <div id='impt-links'>
            <h3>Ride Share for Motorcycles</h3>
            <h4>Ride Share for Motorcycles is the perfect platform for you <br />
            to rent a motorcycle or to share your bike for some extra cash.</h4>
          </div>
          <div id='impt-links'>
            <h3>Navigate</h3>
            <Link href="../" color="inherit"><h4>Home</h4></Link>
            <Link href="../" color="inherit"><h4>About Us</h4></Link>
            <Link href="../signup" color="inherit"><h4>Sign Up</h4></Link>
          </div>
          <div id='social-media'>
            <h3>Social Media</h3>
            <Link href="#" ><FacebookIcon color="secondary" /></Link>
            <Link href="#" ><InstagramIcon color="secondary"/> </Link> 
            <Link href="#" ><TwitterIcon color="secondary" /> </Link>
          </div>
        </div> 
        <div id='copyright'>
          <Typography
            className="copyrightText"
            variant="body1"
            align="center">
              <span id="copyrightText">
              {"Copyright © "}
              Ride Share for Motorcycles
              {" "}  
              {new Date().getFullYear()}
              {"."}
              </span>
          </Typography>
        </div>
      </div>
    )
  }
}

export default Footer1;