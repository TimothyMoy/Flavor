import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './Config/Routes';
import AppNavbar from './Components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from'./store';
import { loadUser } from './actions/authAction';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
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
