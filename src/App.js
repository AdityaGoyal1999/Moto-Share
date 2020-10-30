import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'


import AccountAccess from './react-components/AccountAccess'
import AccountInfo from "./react-components/AccountInfo";
import AdminDataTableView from "./react-components/AdminDataTableView";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (<h1>Under Construction...</h1>)} />
        <Route exact path='/login' render={() => <AccountAccess isLoginView={true} />} />
        <Route exact path='/signup' render={() => <AccountAccess isLoginView={false} />} />
        <Route exact path="/AccountInfo" render={() => <AccountInfo />} />
        <Route exact path="/admin" render={() => <AdminDataTableView />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
