import React, { userState, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';
import AboutLayout from './layouts/AboutLayout';
import { getUsers } from './utils/request';

export default function App() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.items);
    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutLayout />
        </Route>
        <Route path="/users">
          <Users users={users}/>
        </Route>
        <Route path="/">
          <HomeLayout />
        </Route>
      </Switch>

    </Router>
  );
}



function Users(props) {
  const users = props.users;
  return (
    <div className="row">
      <div className="col-4">
        <h2>Users</h2>
        {
          users.map(user => (
            <div key={user.id}>
              {user.givenName} {user.familyName}
            </div>
          ))
        }
      </div>
    </div>
    
    
  )
}
