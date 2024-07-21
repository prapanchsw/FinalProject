import React from 'react';
import Navbar from './Navbar';
import Admin from './Admin';
import { Padding } from '@mui/icons-material';

const AdminPage = () => {
  return (
    <div >
        <div >
        <Navbar />
      </div>
      <div >
        <Admin />
        </div>
    </div>
  );
};

export default AdminPage;
