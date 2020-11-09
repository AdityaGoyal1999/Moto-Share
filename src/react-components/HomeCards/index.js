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
        <h1>How it works: </h1>
        <div id='cardsContainer'>
          <Card className='card'>
            <CardMedia className='media' image='./book.jpg' />
            <CardContent>
              <h2>Book a bike</h2>
              <p>Find a bike and book it using site credits</p>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./pickup.jpg' />
            <CardContent>
              <h2>Pick up your ride</h2>
              <p>Decide on a place to meet with your<br /> bike lord and pick up your ride there</p>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./return.jpg' />
            <CardContent>
              <h2>Return your ride</h2>
              <p>On the return date, bring the<br /> bike back to the bike lord</p>
            </CardContent>
          </Card>
          <Card className='card'>
            <CardMedia className='media' image='./bikelord.jpg' />
            <CardContent>
              <h2>Want to earn credits?</h2>
              <p>Post ads and rent out your bike</p>
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