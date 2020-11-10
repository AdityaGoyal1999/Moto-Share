import React from 'react'
import './style.css'

class AccountInfo extends React.Component {
  render(){
    return(
        <div>
          <div id='picContainer'>
            <img id ='profilePic' src={require('./Profilepic.jpg')} alt= "profile pic"/>
          </div>
            <table id = "datatable">
              <thead>
                <tr>
                    <th id = 'item'>Firstname</th>
                    <th id = 'item'>Lastname</th>
                    <th id = 'item'>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
                <tr>
                    <td id = 'item'>Jill</td>
                    <td id = 'item'>Smith</td>
                    <td id = 'item'>50</td>
                </tr>
                <tr>
                    <td id = 'item'>Eve</td>
                    <td id = 'item'>Jackson</td>
                    <td id = 'item'>94</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
  }
}

export default AccountInfo
