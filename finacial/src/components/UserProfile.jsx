import { Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Userpg from './Userpg';
import { BorderColor, BorderColorOutlined, Margin, ScoreOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
    root: {
        textAlign: 'center',
        padding: '40px',
        position: 'relative', // Ensure the container is relative for proper absolute positioning
        zIndex: 1, // Base content zIndex
        width: '130vh',
        borderRadius: '40px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
        marginLeft: '120px',
        padding: '20px',
        backgroundColor: '#01ffc9',
        border: '2px solid #01ffc9',
        borderRadius: '20px',
    },
    table: {
        marginTop: '20px',
        backgroundColor: '#fff',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        zIndex: 2, // Ensure overlay is above the base content
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userpg: {
        position: 'static',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: 1, // Ensure Userpg is behind the overlay
    }
};

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState(() => {
        const storedDetails = localStorage.getItem('userDetails');
        return storedDetails ? JSON.parse(storedDetails) : {};
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const email = location.state?.email || userDetails.email; // Retrieve email from location state or local storage
        if (email && !userDetails.email) {
            axios.get('http://localhost:3000/userview')
                .then(response => {
                    // Filter user based on email
                    const user = response.data.find(user => user.email === email);
                    if (user) {
                        setUserDetails(user);
                        localStorage.setItem('userDetails', JSON.stringify(user));
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError('Failed to fetch user details');
                });
        }
    }, [location.state?.email]);


    return (
        <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%', paddingLeft: '30px' }}>
            <div style={styles.userpg}>
                <Userpg userDetails={userDetails} />
            </div>

            {/* Main Content */}
            <Container sx={{marginLeft: '140vh',color:"",paddingTop: '50px'}}>
                {userDetails ? (
                    <div>
                        <Typography variant="h5" color="#00ffc7">Name: {userDetails.name}</Typography>
                        <br /><br />
                        <Typography variant="h5" color="#00ffc7">Email: {userDetails.email}</Typography>
                        {/* Add more user details as needed */}
                    </div>
                ) : (
                    <Typography variant="h6">Loading user details...</Typography>
                )}
            </Container>
        </div>
    );
};

export default UserProfile;
