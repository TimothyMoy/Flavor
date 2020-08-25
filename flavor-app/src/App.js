import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Config/Routes';
import AppNavbar from './Components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from'./store';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div>
          <AppNavbar />
          { Routes }
        </div>
      </Provider>
    );
  }
}

export default App;
