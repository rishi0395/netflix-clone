import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// route the page based on user logged in

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }}
            />
          );
        }

        return null;
      }}
    />
  );
}
