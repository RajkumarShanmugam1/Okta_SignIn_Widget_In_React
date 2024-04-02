import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Profile from './components/pages/Profile';
import config from './config';
import NavBar from './components/layout/NavBar';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className="App">
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <NavBar/>
          <Route path="/" exact component={Home} />
          <Route path="/Okta_SignIn_Widget_In_React" exact component={Home} />
          <SecureRoute path="/profile" component={Profile} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/login/callback" component={LoginCallback} />
        </Security>
    </div>
  );
};

export default App;