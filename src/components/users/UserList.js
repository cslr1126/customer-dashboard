import React, { useState, useEffect } from 'react';

import { getUsers } from '../../utils/request';

const UserList = (props) => {
 const [users, setUsers] = useState([]);
 
 let isLocal = props.isLocal;
  useEffect(() => {
    getUsers(isLocal).then(res => {
        setUsers(res.items);
    })
  }, []);
 return (
      <div className="row">
        <div className="col-4">
          <h3>Users</h3>
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