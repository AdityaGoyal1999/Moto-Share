import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import HomePage from './react-components/HomePage'

import AccountAccess from './react-components/AccountAccess'
import AdminDataTableView from "./react-components/AdminDataTableView";
import PostedAds from './react-components/PostedAds';
import Results from './react-components/Results'
import PostAd from './react-components/PostAd'
import CompleteBikeInfo from './react-components/Results/AdsBoard/CompleteBikeInfo'
import User from './react-components/UserAccount'
import Login from './react-components/Login'
import { checkSession } from "./actions/user";

class App extends React.Component {

  componentDidMount() {
    const {responseData, errorMessage} = checkSession(this)
    if (responseData) {
      this.setState({currentUser: responseData.currentUser})
    }
  }

  state = {
    currentUser: null
  }


  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/loggedIn' render={() => <HomePage loggedIn={true}/>} />
          <Route exact path='/login' render={() =>  <AccountAccess isLoginView={true} app={this} />} />
          <Route exact path='/login' render={() =>  <Login {...this.props} app={this} />} />
          <Route exact path='/signup' render={() => <AccountAccess isLoginView={false} />} />
          <Route exact path="/admin" render={() => <AdminDataTableView loggedIn={true}/>} />
          <Route exact path="/postedads" render={() => <PostedAds />} />
          <Route exact path='/results' render={() => <Results />} />
          <Route exact path='/postad' render={() => <PostAd />} />
          <Route exact path='/CompleteBikeInfo' render={() => <CompleteBikeInfo />} />
          <Route exact path="/User" render={()=> <User loggedIn={true}/>} />
          
          {/* Change this later */}
          <Route render={() => <div>404 Not found</div>} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;