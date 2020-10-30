import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import HomePage from './react-components/HomePage'
import AccountAccess from './react-components/AccountAccess'
import AccountInfo from "./react-components/AccountInfo";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/login' render={() => <AccountAccess isLoginView={true} />} />
        <Route exact path='/signup' render={() => <AccountAccess isLoginView={false} />} />
        <Route exact path="/AccountInfo" render={() => <AccountInfo />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
