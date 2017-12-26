import React, { Component } from 'react';
import Sidebar              from '../Sidebar/index';
import Routes               from '../../routes';

const style = {
    display: 'flex',
    minHeight: '100vh',
    flexWrap: 'wrap'
};

export default class App extends Component {
  render() {
    return (
      <div className="app" style={ style }>
        <Sidebar />
        <Routes />
      </div>
    );
  }
}