import React from "react";
import {
  HashRouter as Router,
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
        <Route 
          exact 
          path="/about"
          component={AboutLayout}
          />
          
        
        <Route path="/">
          <HomeLayout />
          {isLocal && isSignedIn ? (
                <UserList isLocal={isLocal()}/>
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


export function isLocal() {
  if (process.env.NODE_HOST === 'localhost') 
   console.log('is local')
   return true;
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