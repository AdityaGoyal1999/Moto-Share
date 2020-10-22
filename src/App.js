import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<h1>Under Construction...</h1>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
