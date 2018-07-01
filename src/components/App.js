import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../containers/NavBar';
import Transaction from '../containers/Transaction';
import Transactions from '../containers/Transactions';
import Login from '../containers/Login';
import RestrictRoute from '../containers/RestrictRoute';
import Alert from '../containers/Alert';

import styles from './App.scss';


const App = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <NavBar />
    </header>

    <main className={styles.content}>
      <Switch>
        <RestrictRoute exact path="/" component={Transactions}/>
        <RestrictRoute exact path="/add" component={Transaction}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
      <Alert />
    </main>

  </div>
);

export default App;