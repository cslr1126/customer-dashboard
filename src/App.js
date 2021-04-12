import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
          <Users />
        </Route>
        <Route path="/">
          <HomeLayout />
        </Route>
      </Switch>

    </Router>
  );
}



function Users() {
  return <h2>Users</h2>;
}
