import React, { Component } from 'react';
import styles from './App.scss';

console.log(styles);

export default class App extends Component {
  render() {
    return (<div className={styles.container}>Hello, React!</div>);
  }
}