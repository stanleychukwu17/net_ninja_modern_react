import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Bloglist from './bloglist.js';
import Getman from './get_content.js';

function App() {
  let [blogs, setBlogs] = useState(null);

  let deleteBlog = blog_id => {
    let boju = [];
    boju = blogs.filter(v => v.id !== blog_id);
    setBlogs(boju);
  }

  let {data, pending, error} = Getman('http://localhost:8000/blogs');
  setBlogs(data);

  if (blogs) {
    console.log('we made it');
  } else {
    console.log('e no dey');
  }

  /* useEffect(() => {
    console.log('we go dey hail your name!');
  }); */

  return (
    <div className="App_cover">
      <Navbar />
      <Home />
      {blogs && <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>}
      {blogs && <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );