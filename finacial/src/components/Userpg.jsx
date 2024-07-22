import React from 'react';
import Navbaruser from './Navbaruser';
import User from './User';

const Userpg = ({ userDetails }) => {
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
