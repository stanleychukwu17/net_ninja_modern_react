import {React, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Navbar from './navbar.js';
import Home from './home.js';
import Bloglist from './bloglist.js';
import get_content from './get_content.js';

function App() {
  let [blogs, setBlogs] = useState(null);

  let deleteBlog = blog_id => {
    let boju = [];
    boju = blogs.filter(v => v.id !== blog_id);
    setBlogs(boju);
  }

  useEffect(() => {
    let dean = get_content('http://localhost:8000/blogs');
    console.log(dean);
    return () => 'time';
  }, []);

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