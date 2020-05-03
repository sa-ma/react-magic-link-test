import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logoutUser } from '../../services/magic';
import './Dashboard.css';

const Dashboard = () => {
  const { email } = useContext(UserContext);
  const history = useHistory();
  const handleLogOut = async () => {
    try {
      await logoutUser();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="btn__container">
        <button className="btn__sign-out" onClick={handleLogOut}>
          Sign Out
        </button>
      </div>
      <h1 className="user">User: {email}</h1>
    </div>
  );
};

export default Dashboard;
