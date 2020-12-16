import React from 'react';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import Browse from './pages/browse';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { UseAuthListener } from './hooks';

export default function app() {
  const user = UseAuthListener();
  console.log(user);

  return (
    <Router>
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_IN}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <SignIn />
      </IsUserRedirect>

      <IsUserRedirect
        exact
        path={ROUTES.SIGN_UP}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect
        exact
        path={ROUTES.HOME}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
