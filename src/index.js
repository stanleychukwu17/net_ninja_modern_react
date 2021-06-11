import {React} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Navbar from './navbar.js';
import Bloglist from './bloglist.js';
import Getman from './get_content.js';

import Create from './Create.js';
import About from './About_us';

function App() {

  let deleteBlog = blog_id => {}

  let {data:blogs, pending, error} = Getman('http://localhost:8000/blogs');

  return (
    <Router>
      <div className="App_cover">
        <Navbar />
        <div className="all_contents">
          <Switch>
            <Route path="/">
              {error && <div className="errMan">{error}</div>}
              {pending && <div className="Loading">Loading blog...</div>}
              {blogs && <Bloglist delF={deleteBlog} blogs={blogs} title="All the blog"/>}
              {blogs && <Bloglist delF={deleteBlog} blogs={blogs.filter(ech => ech.author === 'mario')} title="Marios blog"/>}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );