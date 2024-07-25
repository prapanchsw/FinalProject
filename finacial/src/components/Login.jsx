import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import video from '../assets/video.mp4';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    borderBottomColor: 'lightblue',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'darkblue',
  },
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role === 'user') {
      try {
        const response = await axios.post('http://localhost:3000/login', { email, password });
        console.log(response);
        if (response.data.status === 'success') {
          const userIdResponse = await axios.get(`http://localhost:3000/userid?email=${email}`);
          console.log('userIdResponse',userIdResponse);
          navigate('/userprofile', {
            state: { email: response.data.user.email, name: response.data.user.name ,id:userIdResponse.data.userId}
          });
        } else {
          setError('Login failed: ' + response.data.message);
        }
      } catch (err) {
        console.log(err);
        setError('Login failed');
      }
    } else {
      setError('Please select the "user" role to login.');
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <video autoPlay muted loop id="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20px', paddingLeft: '20vh' }}>
        <form
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
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom>
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    color: 'white'
                  }}
                >
                  <MenuItem value={'admin'}>Admin</MenuItem>
                  <MenuItem value={'user'}>User</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="filled"
                fullWidth
                style={{ marginBottom: '10px' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid item xs={12}>
              {error && (
                <Typography variant="body2" color="error" align="center" style={{ marginBottom: '10px' }}>
                  {error}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '1px' }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Typography sx={{ textAlign: 'left', marginLeft: '-150px' }}>
                  Don't have an account?
                </Typography>
                <Button variant="text">Sign up</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Login;
