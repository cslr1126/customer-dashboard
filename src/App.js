import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClayAlert from '@clayui/alert';
import HomeLayout from './layouts/HomeLayout';
import AboutLayout from './layouts/AboutLayout';
import UserList from './components/users/UserList';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutLayout />
        </Route>
        <Route path="/users">
           
        </Route>
        <Route path="/">
          <HomeLayout />
          {isSignedIn() ? (
              <div>
                <h1 className="text-center mb-4">Users</h1>
                <UserList />
              </div>
            ) : (
              <ClayAlert displayType="warning" title="Attention:">
                You need to sign in to see this content.
              </ClayAlert>
            )}          
        </Route>
      </Switch>
    </Router>
  );
}

export function isSignedIn() {
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  return Liferay().ThemeDisplay.isSignedIn();
}

export function Liferay() {
  return window['Liferay'];
}