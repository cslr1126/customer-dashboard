import React from 'react';

import { getUsers } from './utils/request';

const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers().then(res => {
			setUsers(res.items);
		})
	}, []);

export default UserList = () => {
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