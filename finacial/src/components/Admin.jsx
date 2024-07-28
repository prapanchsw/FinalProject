// src/Admin.js
import React from 'react';
import '../App.css';
import { Sidebar } from './Sidebar';
import { AdminPanelSettings } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useLocation,useNavigate, } from 'react-router-dom';

const Admin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, name, id } = location.state || {email: 'N/A', name: 'N/A', id: 'N/A' };
    return (
        <div className="background1" >
            <div className="sidebar" sx={{overflowY:'hidden',position:'fixed'}}>
                <ul className="sidebarlist" style={{marginLeft: '-130px', paddingLeft: '100%', height: '100%', overflow:'hidden'}}>
                    <li style={{ display: 'flex', alignItems: 'center', padding: '50px 20px 5px 20px' }}>
                        <AdminPanelSettings sx={{ fontSize: 100, marginRight:'20px' ,marginLeft:'330px',color:'white'}} /> 
                       
                    </li>
                    <br /> <br /> <br /><br />
                    {Sidebar.map((val, key) => (
                        <li key={key} className="sidebar-item" style={{ display: 'flex', alignItems: 'center', marginTop: '-70px', marginLeft: '330px' }}
                        onClick={() => navigate(val.link, { state: { detail: val.title, email, name ,id} })}>
                            <br /><br /><br />
                            <div style={{ fontSize: 30 }}>{val.icon}</div> &nbsp;&nbsp;&nbsp;
                            <div style={{ fontSize: 18 }}>{val.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;
