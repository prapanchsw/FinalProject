import React from 'react';
import '../App.css';
import { Sidebar } from './Sidebar'; // Assuming Sidebar is imported correctly and is an array of objects

const Admin = () => {
    return (
        <div className="background1">
            <div className="sidebar">
                <ul className="sidebarlist"sx={{margin:'0',padding:'0'}}>
                    <br /><br /> <br />
                    
                    {Sidebar.map((val, key) => (
                        <li key={key} >
                            <div>{val.icon}</div> &nbsp;&nbsp;&nbsp;
                            <div>{val.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Admin;
