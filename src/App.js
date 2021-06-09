import React, { userState, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClayAlert from '@clayui/alert';
import HomeLayout from './layouts/HomeLayout';
import AboutLayout from './layouts/AboutLayout';


export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutLayout />
        </Route>
        <Route path="/users">
        {isSignedIn() ? (
            <div>
              <h1 className="text-center mb-4">Users</h1>
              <Users users={users}/>
            </div>
          ) : (
            <ClayAlert displayType="warning" title="Attention:">
              You need to sign in to see this content.
            </ClayAlert>
          )}
          
        </Route>
        <Route path="/">
          <HomeLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export function isSignedIn() {
  if (process.env.NODE_ENV === 'development') {
    return false;
  }
  return Liferay().ThemeDisplay.isSignedIn();
}

export function Liferay() {
  return window['Liferay'];
}