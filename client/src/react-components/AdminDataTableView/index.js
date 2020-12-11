import React from 'react';
import './style.css';
import UserTable from './UserTable';
import AdTable from './AdTable';
import NavBar from '../NavBar';
import Button from '@material-ui/core/Button';

class AccountInfo extends React.Component {
    constructor(item) {
        super(item);
        this.state = {
            usertable: true,
            adtable: false,
            borrowedtable: false
        };
    }

    utable = () => {
        this.setState({ usertable: true, adtable: false, borrowedtable: false });
    };

    atable = () => {
        this.setState({ usertable: false, adtable: true, borrowedtable: false });
    };

  render(){
    return(
        <div id='page'>
            <NavBar loggedIn={this.props.loggedIn}/>
            <div id='container'>
                <div id='picContainer'>
                    <img id ='profilePic' src={require('./Profilepic.jpg')} alt= "profile pic"/>
                </div>

                <div id='TableContainer'>
                    <div>
                        <Button onClick={this.utable} variant = {this.state.utable ? 'primary': 'secondary'}>
                            Users Table</Button>
                        <Button onClick={this.atable} variant = {this.state.atable ? 'primary': 'secondary'}>
                            Ads Table</Button>
                    </div>
                    <div id='TableTitleContainer'>
                        {this.state.usertable ? <h2 id='TableTitle'> Users </h2>: null}
                        {this.state.adtable ? <h2 id='TableTitle'> Ads </h2>: null}

                    </div>
                    <div id='table'>
                        {this.state.usertable ? <UserTable/>: null}
                        {this.state.adtable ? <AdTable/>: null}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default AccountInfo
