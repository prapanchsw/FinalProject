import React from 'react';
import Navbaruser from './Navbaruser';
import User from './User';
import { useLocation } from 'react-router-dom';

const Userpg = () => {
  
        const location = useLocation();
  const { email, name, id } = location.state || { email: 'N/A', name: 'N/A', id: 'N/A' };
  // console.log('Location state:', location.state);
  const userDetails = { email, name, id };
  console.log(userDetails);
  return (
    <div>
      <div>
        <Navbaruser />
      </div>
      <div>
        <User userDetails={userDetails} />
      
      </div>
    </div>
  );
};

export default Userpg;
