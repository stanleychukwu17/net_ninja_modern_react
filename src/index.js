import {React} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Navbar from './navbar.js';

import AboutPage from './About_us';
import BlogDetails from './blog_details';
import Home from './Home.js';
import CreateNewBlog from './Create.js';
import ojemba from "./funcs.js";

function App() {
  return (
    <Router>
      <div className="App_cover">
        <Navbar />
        <div className="all_contents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about_us">
              <AboutPage />
            </Route>
            <Route exact path="/new_blog"><CreateNewBlog /></Route>
            <Route exact path="/blogs/:id"><BlogDetails /></Route>
            <Route path="*">{ojemba.NoPage}</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root') );