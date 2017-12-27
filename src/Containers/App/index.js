import React, { Component } from 'react';
import Sidebar              from '../Sidebar/index';
import Routes               from '../../routes';


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Routes />
      </div>
    );
  }
}