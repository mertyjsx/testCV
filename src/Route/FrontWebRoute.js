import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../pages/_services/user.service";

// handle the Fron Web Routes
function FronWebRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default FronWebRoute;
