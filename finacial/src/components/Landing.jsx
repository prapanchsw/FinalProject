import React from 'react'
import '../style/landing.css'
import { Button, Card, CardContent,Typography } from '@mui/material'
import video from '../assets/video.mp4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
   display: flex;
  justify-content:space-evenly;
  gap: 20px; 
  margin-top: 50px;
`;

const StyledCard = styled.div`
  max-width: 400px;
  max-height:350px;

  background-color: rgba(255, 255, 255, 0.4); 
  backdrop-filter: blur(10px) brightness(200%); 
  box-shadow: 0 8px 16px rgba(0,0,0,0.1); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
  border-radius:10px;
  padding: 0;
  place-items: centre;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;


const Landing = () => {
  return (
    
    <div className="landing">
    
      <div className="video-background">
     
      <video autoPlay muted loop id="background-video">
        <source src={video}type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="overlay"></div> 
        <div className="title">
          <Typography variant="h2">Effortless Expense Tracking </Typography>
          <Typography variant="h2"> for a Better Future</Typography>
          <p>The purpose of the Personal Finance Management App is to provide users with a platform to
manage their personal finances effectively by tracking income, expenses, setting budgets, and
achieving financial goals.</p>
      </div>
    </div>
      <Button id='btn'>
        <Link to='/signup' className='link'>
     
        Get Started </Link >
      </Button>
      <Button id='btn1'><Link to='/login' className='link' >Login</Link></Button>
      <Button id='btn2'> <Link to='/signup' className='link'>
     Create Account </Link ></Button> 
      <Button id='btn3'> <Link to='/about' className='link'>About</Link></Button>

      <div id="card1">
        <Container>

        



        <StyledCard >
      
      
          </StyledCard>
          </Container>
    </div>
    
    </div>
  )
}

export default Landing
