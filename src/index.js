import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './navbar.js';
import Home from './home.js';

function App() {
  return (
    <div className="App_cover">
      <Navbar />
      <Home />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );