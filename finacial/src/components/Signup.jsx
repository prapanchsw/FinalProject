import React, { useState } from 'react';
import video from '../assets/video.mp4';
import '../style/signup.css';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const textFieldStyles = {
  '& .MuiFilledInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: 'rgba(255, 255, 255, 0.6)', 
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: 'light blue', 
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
};

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/add', { name,email,password})
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation('/login')
  };

  return (
    <div>
      <video autoPlay muted loop id="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px', paddingLeft: '20vh' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'white',
            zIndex: '1',
            backdropFilter: 'blur(100px) brightness(300%)',
            overflow: 'hidden',
            padding: '40px'
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Create Account
              </Typography>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Name"
                  variant="filled"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginBottom: '10px' }}
                  sx={textFieldStyles}
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginBottom: '10px' }}
                  sx={textFieldStyles}
                />
                <TextField
                  type="password"
                  label="Password"
                  variant="filled"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ marginBottom: '10px' }}
                  sx={textFieldStyles}
                />
                <Grid item xs={12}>
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '1px' }}
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Signup;
