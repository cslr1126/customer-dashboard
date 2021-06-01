import React, {useEffect, useState}  from "react";

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
  const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(res => {
			setUsers(res.items);
		})
	}, []);
  let layoutUrl= new URL(Liferay.ThemeDisplay.getLayoutURL())
  return (  
    console.log("layoutURL: ", layoutUrl)
    <Router>
      <Switch>
        <Route path="/about">
          <AboutLayout />
        </Route>
        <Route path="/{%path:.*}">
          
        </Route>
        <Route path="/">
          <HomeLayout />
          <Users users={users} />
        </Route>
      </Switch>

    </Router>
  );
}



function Users(props) {
  const users  = props.users;
  return (
    <div className="row">
			<div className="col-4">
				<h1>Users:</h1>

				{users.map(user => (
					<div key={user.id}>
						{user.givenName} {user.familyName}
					</div>
				))}
			</div>
			
		</div>
  )
}
