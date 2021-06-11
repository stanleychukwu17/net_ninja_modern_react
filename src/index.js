import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navbar from './navbar.js';
import Bloglist from './bloglist.js';
import Getman from './get_content.js';

function App() {

  let deleteBlog = blog_id => {
    let boju = [];
    boju = blogs.filter(v => v.id !== blog_id);
    // setBlogs(boju);
  }

  let {data:blogs, pending, error} = Getman('http://localhost:8000/blogs');

  return (
    <div className="App_cover">
      <Navbar />
      {error && <div className="errMan">{error}</div>}
      {pending && <div className="Loading">Loading blog...</div>}
      {blogs && <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>}
      {blogs && <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );