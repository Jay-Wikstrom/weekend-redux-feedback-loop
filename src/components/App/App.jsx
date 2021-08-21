import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
function App() {

  return (
    <div className='App'>
    <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/understanding">Understanding</Link>
            </li>
            <li>
              <Link to="/supported">Supported</Link>
            </li>
            <li>
              <Link to="/comments">comments</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/submit">Submit</Link>
            </li>
          </ul>
        </nav>

        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
        <Route path="/supported" exact>
          <Supported />
        </Route>
        <Route path="/comments" exact>
          <Comments />
        </Route>
        <Route path="/review" exact>
          <Review />
        </Route>
        <Route path="/submit" exact>
          <Submit />
        </Route>
      </Router>
    </div>
  );
}

export default App;
