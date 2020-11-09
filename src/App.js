import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import HomePage from './react-components/HomePage'

import AccountAccess from './react-components/AccountAccess'
import AdminDataTableView from "./react-components/AdminDataTableView";
import PostedAdsPage from './react-components/PostedAds';
import Results from './react-components/Results'
import Bike from './react-components/Bike'
import PostAd from './react-components/PostAd'
import CompleteBikeInfo from './react-components/Results/AdsBoard/CompleteBikeInfo'
import User from './react-components/UserAccount'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/login' render={() => <AccountAccess isLoginView={true} />} />
        <Route exact path='/signup' render={() => <AccountAccess isLoginView={false} />} />
        <Route exact path="/admin" render={() => <AdminDataTableView />} />
        <Route exact path="/postedads" render={() => <PostedAdsPage />} />
        <Route exact path='/results' render={() => <Results />} />
        <Route exact path='/bike' render={() => <Bike />} />
        <Route exact path='/postad' render={() => <PostAd />} />
        <Route exact path='/CompleteBikeInfo' render={() => <CompleteBikeInfo />} />
        <Route exact path="/User" render={()=> <User />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;