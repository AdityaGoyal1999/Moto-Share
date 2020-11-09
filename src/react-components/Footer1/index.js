import React from 'react'

import './style.css'
import {Typography, Link} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

class Footer1 extends React.Component {
  render () {

    return (
      <div id='footer1'>
        <div id="footerInfo">
          <div id='impt-links'>
            <h3>MotoShare</h3>
            <h5>MotoShare is the perfect platform for you
            to rent a motorcycle or to share your bike for some extra cash.</h5>
          </div>
          <div id='impt-links'>
            <h5><b><i><u>Navigate</u></i></b></h5>
            <Link href="../" color="inherit"><h5>Home</h5></Link>
            <Link href="../" color="inherit"><h5>About Us</h5></Link>
            <Link href="../signup" color="inherit"><h5>Sign Up</h5></Link>
          </div>
          <div id='social-media'>
            <h5>Social Media</h5>
            <Link href="#" ><FacebookIcon color="secondary" /></Link>
            <Link href="#" ><InstagramIcon color="secondary"/> </Link> 
            <Link href="#" ><TwitterIcon color="secondary" /> </Link>
            <Link href="#" ><YouTubeIcon color="secondary" /> </Link>
          </div>
        </div> 
        <div id='copyright'>
          <Typography
            className="copyrightText"
            variant="body1"
            align="center">
              <span id="copyrightText">
              {"Copyright © "}
              MotoShare
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