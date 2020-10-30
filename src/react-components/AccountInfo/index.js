import React from 'react'
import './style.css'

class AccountInfo extends React.Component {
  render(){    
    return (
        <div>
            <div id='picContainer'>
                <img id ='profilePic' src={require('./Profilepic.jpg')} alt= "profile pic"/>
            </div>

            <div id={'profileInfo'}>
                <span>
                    <h1 id='title'> Account Information</h1>
                    <strong>
                        <p id='label'> Name: </p>
                    </strong>
                    <p id='values'> Bob Smith </p>
                    <strong>
                        <p id='label'> Username: </p>
                    </strong>
                    <p id='values'> BobSmith 2 </p>
                    <strong>
                        <p id='label'> Email: </p>
                    </strong>
                    <p id='values'> BobSmith@gmail.com </p>
                    <strong>
                        <p id='label'> Number of Ads Posted: </p>
                    </strong>
                    <p id='values'> 18 </p>
                </span>

            </div>
        </div>


    )
  }
}

export default AccountInfo
