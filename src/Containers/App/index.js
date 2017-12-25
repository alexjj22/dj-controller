import React, { Component } from 'react';
import { withRouter }       from 'react-router-dom';
import Sidebar              from '../../Components/Sidebar';
import Routes               from '../../routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App)