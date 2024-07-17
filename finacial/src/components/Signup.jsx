import React from 'react'
import video from '../assets/video.mp4';
import '../style/signup.css'
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
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
      borderBottomColor: 'rgba(255, 255, 255, 0.6)', // default border color
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: 'light blue', // border color when focused
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'black',
    },
  };
const Signup = () => {
  return (
    <div>
       <video autoPlay muted loop id="background-video">
        <source src={video}type="video/mp4" />
        Your browser does not support the video tag.
            </video>
          <div className="overlay"></div> 
          <Container style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <form
                    style={{
                        width: '100%',
                        maxWidth: 300,
                        padding: '40px',
                        borderRadius: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: 'white',
                        zIndex: '1',
                        backdropFilter: 'blur(100px) brightness(300%)' ,
                       
                  }}>
                  <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                  <Typography variant="h4" align="center" gutterBottom>
            Create Account
                </Typography>
                          <Grid item xs={12}>
                              
         <TextField         
              type="text"
              label="Name"
              variant="filled"
              fullWidth
              style={{ marginBottom: '10px' }}
         
                             
                                  sx={textFieldStyles} />
                              

                              <TextField         
              type="number"
              label="Age"
              variant="filled"
              fullWidth
              style={{ marginBottom: '10px' }}
         
                             
                                sx={textFieldStyles}/>
                              
                             
                              
                              <Grid item xs={12}>
                  
                                  <FormControl fullWidth variant='filled' sx={textFieldStyles} style={{ marginBottom: '-15px' }}>
    <InputLabel id="demo-simple-select-label" sx={{color: 'white',}}>Gender</InputLabel>
    <Select
      // value={age}
                                          label="gender"
                                        
                                          autoWidth
                                          // onChange={handleChange}
                      
    >
      <MenuItem value={'Male'} sx={{}}>Male</MenuItem>
      <MenuItem value={'Female'}>Female</MenuItem>
    
    </Select>
        </FormControl>
                    </Grid>
<br />
                    <TextField         
              type="email"
              label="Email"
              variant="filled"
              fullWidth
              style={{ marginBottom: '10px' }}
         
                             
                                  sx={textFieldStyles} />
                              
                              <TextField         
              type="password"
              label="Password"
              variant="filled"
              fullWidth
              style={{ marginBottom: '10px' }}
         
                             
                                  sx={textFieldStyles} />
                              
                              <Grid item xs={12}>
                                  <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1px' }}
            >
           Create Acoount
                                  </Button>
                                  </Grid>

                          </Grid>
                          </Grid>
                  </Grid>

                  </form>
              </Container>
    </div>
  )
}

export default Signup
