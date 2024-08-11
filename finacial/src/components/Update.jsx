import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const styles = {
    root: {
        textAlign: 'center',
        padding: '60px',
        position: 'relative',
        zIndex: 1, 
        width: '130vh',
        borderRadius: '10px',
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
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '-20vh',
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        zIndex: 2, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profileDetails: {
        marginTop: '20px',
        width: '100%',
        paddingRight: '70vh'
    },
    profileItem: {
        marginBottom: '20px',
        textAlign: 'left',
    
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
    },
};

const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id, email, name } = location.state || { id: 'N/A', name: 'N/A', email: 'N/A' };
    const [userData, setUserData] = useState({ name: name, email: email, password: '' });

    useEffect(() => {
        axios.get(`http://localhost:3000/userview/${id}`)
            .then((res) => {
                const user = res.data;
                if (user) {
                    setUserData({
                        name: user.name || '',
                        email: user.email || '',
                        password: ''
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/update/${id}`, userData)
            .then((res) => {
                console.log('User updated:', res.data);
                navigate('/userprofile', {
                    state: { id, name: userData.name, email: userData.email }
                });
            })
            .catch((err) => {
                console.error('Error updating user:', err);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClick = () => {
        console.log('Navigating to profile with:', userData);
        navigate(`/Userprofile`, {
            state: { id, name: userData.name, email: userData.email }
        });
    };

    return (
        <div>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
                <Paper style={styles.profileContainer}>
                    <Typography variant='subtitle1' sx={{ paddingRight: '100px' }}>
                        Back to{' '}
                        <Button onClick={handleClick} sx={{ textTransform: 'none' }}>
                            Profile
                        </Button>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            name="name"
                            label="Name"
                            value={userData.name}
                            onChange={handleChange}
                        />
                        <br /> <br />
                        <TextField
                            type="email"
                            name="email"
                            label="Email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                        <br /> <br />
                        <TextField
                            type="password"
                            name="password"
                            label="Password"
                            required
                            value={userData.password}
                            onChange={handleChange}
                        />
                        <br /> <br />
                        <Button variant="contained" type="submit" color="primary">Update</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Update;
