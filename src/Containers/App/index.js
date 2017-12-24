import React, { Component } from 'react';
import Sidebar from '../../Components/Sidebar'
import Routes from '../../routes'
import { withRouter } from 'react-router-dom'

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

//<Sidebar />
//<Routes />