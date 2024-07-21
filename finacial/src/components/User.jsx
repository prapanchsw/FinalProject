import React from 'react';
import '../App.css';
import { Sidebaruser } from './Sidebaruser';
import { AccountCircleOutlined} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();
  return (
    <div style={{ padding: '20px', marginLeft: '250px' }}>
      <Typography variant="h4">Content for {location.pathname}</Typography>
    </div>
  );
};

const User = () => {
    return (
        <div className="background1" >
            <div className="sidebar" sx={{overflowY:'hidden',position:'fixed'}}>
                <ul className="sidebarlist" style={{marginLeft: '-130px', paddingLeft: '100%', height: '100%', overflow:'hidden'}}>
                    <li style={{ display: 'flex', alignItems: 'center', padding: '50px 20px 5px 20px' }}>
                        < AccountCircleOutlined sx={{ fontSize: 100, marginRight:'20px' ,marginLeft:'330px'}} /> 
                       
                    </li>
                    <br /> <br /> <br /><br />
            {Sidebaruser.map((val, key) => (
                      
              <li key={key}
                className="sidebar-item"
                style={{ display: 'flex', alignItems: 'center', marginTop: '-50px', marginLeft: '330px' }}
                onClick={() => {
                  window.location.pathname = val.link;
                }}>
                            <br /><br /><br />
                            <div style={{ fontSize: 30 }}>{val.icon}</div> &nbsp;&nbsp;&nbsp;
                            <div style={{ fontSize: 18 }}>{val.title}</div>
                        </li>
                    ))}
                </ul>
        </div>
        <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)', padding: '20px' }}>
        <Routes>
          <Route path="/addincome" element={<Content />} /> {/* Placeholder for actual routes */}
          </Routes>
          </div>
        </div>
    );
};


export default User
