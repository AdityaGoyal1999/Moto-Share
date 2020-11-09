import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core'

import './style.css'

// Cards for main page, explaining how site works
class HomeCards extends React.Component {
  render () {
    const handleClick = () => {
      // server call to check if logged in, sends to login if not logged in
      window.open('/PostedAds', '_self')
    }

    return (
      <div id='superContainer'>
        <h4>How it works: </h4>
        <div id='cardsContainer'>
          <Card className='card'>
            <CardMedia className='media' image='./book.jpg' />
            <CardContent>
              <h5>Book a bike</h5>
              <h6>Find a bike and book it using site credits</h6>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./pickup.jpg' />
            <CardContent>
              <h5>Pick up your ride</h5>
              <h6>Decide on a place to meet with your<br /> bike lord and pick up your ride there</h6>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./return.jpg' />
            <CardContent>
              <h5>Return your ride</h5>
              <h6>On the return date, bring the<br /> bike back to the bike lord</h6>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./bikelord.jpg' />
            <CardContent>
              <h5>Want to earn credits?</h5>
              <h6>Post ads and rent out your bike</h6>
            </CardContent>
            <CardActions>
              <Button onClick={handleClick}>Post an ad</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

export default HomeCards
