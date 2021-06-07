import {React, useState} from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Bloglist from './bloglist.js';

function App() {
  let [blogs, setBlogs] = useState([
    {'title':'Blog from 1', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'julio', 'id':1},
    {'title':'Blog from 2', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'ben', 'id':2},
    {'title':'Blog from 3', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'mario', 'id':3},
    {'title':'Blog from 4', 'preview':'Highlights', 'body':'Lorem ispanum', 'author':'mario', 'id':4},
  ]);

  let deleteBlog = blog_id => {
    console.log(blog_id);
    console.log('i love this');
  }

  return (
    <div className="App_cover">
      <Navbar />
      <Home />
      <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>
      <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author == 'mario')} title="Marios blog"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );