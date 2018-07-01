import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../containers/NavBar';
import Transaction from '../containers/Transaction';
import Transactions from '../containers/Transactions';
import Login from '../containers/Login';
import RestrictRoute from '../containers/RestrictRoute';

import styles from './App.scss';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <NavBar />
        </header>

        <main className="row">
          <div className="col-8">
            <Switch>
              <RestrictRoute exact path="/" component={Transactions}/>
              <RestrictRoute exact path="/add" component={Transaction}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}