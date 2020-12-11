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
import { checkSession } from "./actions/user";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    checkSession(this)
  }

  render() {
    const { currentUser } = this.state;
    console.log(this.state.currentUser)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <HomePage loggedIn={currentUser !== null}/>} />
          <Route exact path='/loggedIn' render={() => <HomePage loggedIn={true}/>} />
          <Route exact path='/login' render={(props) =>  <AccountAccess {...props} isLoginView={true} app={this} />} />
          <Route exact path='/signup' render={(props) => <AccountAccess {...props} isLoginView={false} />} />
          <Route exact path="/admin" render={(props) => <AdminDataTableView {...props} loggedIn={true}/>} />
          <Route exact path="/postedads" render={(props) => currentUser ? <PostedAds {...props} currentUser={this.state.currentUser} /> : <AccountAccess {...props} isLoginView={false} />} />
          <Route exact path='/results' render={(props) => <Results {...props}/>} />
          <Route exact path='/postad' render={currentUser ? (props) => <PostAd {...props} currentUser={this.state.currentUser}/> : (props) => <AccountAccess {...props} isLoginView={false} />}  />
          <Route exact path='/CompleteBikeInfo' render={(props) => <CompleteBikeInfo {...props}/>} />
          <Route exact path="/User/:id" render={(props)=> <User {...props} currentUser={this.state.currentUser} loggedIn={true}/>} />
          
          {/* Change this later */}
          <Route render={() => <div>404 Not found</div>} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;