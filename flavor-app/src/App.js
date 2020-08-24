import React from 'react';

import './App.css';
import Routes from './Config/Routes';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      { Routes }
    </div>
  );
}

export default App;
