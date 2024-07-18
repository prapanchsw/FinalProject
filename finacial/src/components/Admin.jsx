// src/Admin.js
import React from 'react';
import '../App.css';
import { Sidebar } from './Sidebar';
import { AdminPanelSettings } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Admin = () => {
    return (
        <div className="background1">
            <div className="sidebar">
                <ul className="sidebarlist" style={{ margin: '0', padding: '0' }}>
                    <li style={{ display: 'flex', alignItems: 'center', padding: '40px 20px' }}>
                        <AdminPanelSettings sx={{ fontSize: 100, marginRight: 2 }} /> 
                       
                    </li>
                    <br /> <br />
                    {Sidebar.map((val, key) => (
                        <li key={key} className="sidebar-item" style={{ display: 'flex', alignItems: 'center', padding: '10px 50px 20px 20px', marginTop: '-60px' }}>
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
