import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './Firebase';
//screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import SignInOrUp from './screens/SignInOrUp';

import Auth from './Auth';

const App = () => {

  return (
      <Router>
          <Switch>
              <Route exact path="/login" component={SignInOrUp} />
              {/* 以下認証のみ */}
              <Auth>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/profile" component={Profile} />
                      <Route render={() => <p>not found.</p>} />
                  </Switch>
              </Auth>
          </Switch>
      </Router>
  );
}

export default App;
