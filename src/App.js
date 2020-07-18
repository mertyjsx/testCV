import React from "react";
import { Switch, Route } from "react-router-dom";

// APP STYLE
import "./App.css";

// SCREENS IMPORT
import Login from "./pages/Login.page";
import SignUp from "./pages/SignUp.page";
import ForgotPassword from "./pages/ForgotPassword.page";
import Verify from "./pages/Verify.page";

import HomePage from "./pages/Home.page";

import ProfilePage from "./pages/Profile.page";

// PUBLIC & PRIVATE ROUTES HANDLING
import PrivateRoute from "./Route/PrivateRoute";
import PublicRoute from "./Route/PublicRoute";

function App() {
  return (
    <Switch>
      {/* USING FOLLOWING ROUTES TO REDIRECT ON ANY SPECIFIC PAGES */}

      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/sign-up" component={SignUp} />
      <PublicRoute exact path="/forgot-password" component={ForgotPassword} />
      <PublicRoute exact path="/verify" component={Verify} />

      <Route exact path="/" component={HomePage} />

      <PrivateRoute exact path="/profile" component={ProfilePage} />

      <Route path="*" component={() => "404 Not Found!"} />
    </Switch>
  );
}

export default App;
