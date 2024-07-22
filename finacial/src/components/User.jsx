import React, { useState, useEffect } from 'react';
import '../App.css';
import { Sidebaruser } from './Sidebaruser';
import { AccountCircleOutlined } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

const Content = () => {
  const location = useLocation();
  return (
    <div style={{ padding: '20px', marginLeft: '250px' }}>
      <Typography variant="h4">Content for {location.pathname}</Typography>
      {location.state && (
        <div>
          <Typography variant="h6">Details:</Typography>
          <Typography>{JSON.stringify(location.state)}</Typography>
        </div>
      )}
    </div>
  );
};

const User = () => {
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const email = location.state?.email; // Retrieve email from location state
    if (email) {
      axios.get('http://localhost:3000/userview')
        .then(response => {
          // Filter user based on email
          const user = response.data.find(user => user.email === email);
          setUserDetails(user || {});
        })
        .catch(err => {
          console.error(err);
          setError('Failed to fetch user details');
        });
    }
  }, [location.state?.email]);

  return (
    <div className="background1">
      <div className="sidebar" style={{ overflowY: 'hidden', position: 'relative', width: '130vh' }}>
        <ul className="sidebarlist" style={{ marginLeft: '-70vh', paddingLeft: '100%', height: '100%', overflow: 'hidden' }}>
          <li style={{ display: 'flex', alignItems: 'center', padding: '30px 0 10px 10px' }}>
            <AccountCircleOutlined style={{ fontSize: 100, marginRight: '20px', marginLeft: '330px' }} />
          </li>
          <br /><br /><br /><br />
          {Sidebaruser.map((val, key) => (
            <li key={key}
              className="sidebar-item"
              style={{ display: 'flex', alignItems: 'center', marginTop: '-50px', marginLeft: '330px' }}
              onClick={() => navigate(val.link, { state: { detail: val.title, userDetails } })}>
              <div style={{ fontSize: 30 }}>{val.icon}</div> &nbsp;&nbsp;&nbsp;
              <div style={{ fontSize: 18 }}>{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)', padding: '20px' }}>
        <Routes>
          <Route path="/user/*" element={<Content />} />
          <Route path="/user" element={<Navigate to="/user/profile" />} />
        </Routes>
      </div>
    </div>
  );
};

export default User;
