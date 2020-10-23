import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import Login from './react-components/Login'
import Signup from './react-components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<h1>Under Construction...</h1>)} />
        <Route exact path='/login' render={() => <Login />} />
        <Route exact path='/signup' render={() => <Signup />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
