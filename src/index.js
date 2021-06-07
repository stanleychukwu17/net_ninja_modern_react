import {React, useState} from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Bloglist from './bloglist.js';

function App() {
  let [blogs, setBlogs] = useState([
    {'title':'Blog from 1', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'julio', 'id':1},
    {'title':'Blog from 2', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'mario', 'id':2},
    {'title':'Blog from 3', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'mario', 'id':3},
    {'title':'Blog from 4', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'mario', 'id':4},
  ]);

  return (
    <div className="App_cover">
      <Navbar />
      <Home />
      <Bloglist blogs={blogs} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );