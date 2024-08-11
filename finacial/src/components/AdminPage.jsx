import React from 'react';
import Navbar from './Navbar';
import Admin from './Admin';
import { useLocation } from 'react-router-dom';
const AdminPage = () => {
  const location = useLocation();
  const { email, name, id } = location.state || { email: 'N/A', name: 'N/A', id: 'N/A' };
  // console.log('Location state:', location.state);
  const userDetails = { email, name, id };
  return (
    <div >
        <div >
        <Navbar />
      </div>
      <div >
        <Admin userDetails={userDetails}/>
        </div>
    </div>
  );
};

export default AdminPage;
