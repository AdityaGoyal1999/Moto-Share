import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import AccountAccess from './react-components/AccountAccess'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<h1>Under Construction...</h1>)} />
        <Route exact path='/login' render={() => <AccountAccess isLoginView={true} />} />
        <Route exact path='/signup' render={() => <AccountAccess isLoginView={false} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
