import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import AccountAccess from './react-components/AccountAccess'
import Results from './react-components/Results';
import Bike from './react-components/Bike';

function App() {
    return ( <
            BrowserRouter >
            <
            Switch >
            <
            Route exact path = '/'
            render = {
                () => ( < h1 > Under Construction... < /h1>)} / >
                    <
                    Route exact path = '/login'
                    render = {
                        () => < AccountAccess isLoginView = { true }
                        />} / >
                        <
                        Route exact path = '/signup'
                        render = {
                            () => < AccountAccess isLoginView = { false }
                            />} / >
                            <
                            Route exact path = "/Results"
                            render = {
                                () => < Results / > }
                            /> <
                            Route exact path = "/Bike"
                            render = {
                                () => < Bike / > }
                            /> <
                            /Switch> <
                            /BrowserRouter>
                        );
                    }

                    export default App;