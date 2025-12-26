import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../redux/actions';

const UserInfo = () => {
  // Safe access to state
  const name = useSelector(state => state.name);
  const email = useSelector(state => state.email);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Information</h1>

      <div className="form-group">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default UserInfo;