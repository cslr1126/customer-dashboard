import React, { useState, useEffect } from 'react';

import { getUsers } from '../../utils/request';

const UserList = () => {
 const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(res => {
        setUsers(res.items);
    })
  }, []);
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

export default UserList;