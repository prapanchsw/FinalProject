import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import video from '../assets/vid.mp4';
import styled from 'styled-components';
import exampleImage from '../assets/img1.jpg';
import exampleImage1 from '../assets/img2.jpg';
import exampleImage2 from '../assets/img3.jpg';
import { Link } from 'react-router-dom';

// Styled components for card alignment

const MediaRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 0px;
  padding: 10px;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: -10px;
`;

const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  min-height: 100vh;
  padding: 20px;
  overflow-y: auto;
`;

const About = () => {
  return (
    <div sx={{overflowY:'scroll'}}>
      <VideoBackground>
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoBackground>

      <ContentContainer>
        <MediaRow>
          <Card sx={{ bgcolor: 'cyan' }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                F<br />O<br />U<br />N<br />D<br />E<br />R<br />S
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 300 }}
              image={exampleImage1}
              title="Abhirami"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Abhirami.S <br />contact:abhirami@gmail.com
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 300 }}
              image={exampleImage2}
              title="Nithin"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Nithin.B<br />contact:bbnithin2002@gmail.com
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 300 }}
              image={exampleImage}
              title="Prapanch.S"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Prapanch.S<br />contact:prapanch@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </MediaRow>

        <StyledCard>
          <Card sx={{ maxWidth: 40, bgcolor: 'cyan',maxHeight:160 }}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                A<br />B<br />O<br />U<br />T
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 1340, maxHeight: 160 }}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                A finance app is an essential digital tool that simplifies the
                management of personal finances by providing an all-in-one platform
                for tracking expenses, income, and budgets. By integrating with bank
                accounts, the app automatically updates and categorizes transactions,
                offering users a comprehensive view of their financial health. It
                helps users set up and manage budgets, providing insights into
                spending habits and financial patterns. With features like real-time
                expense tracking, goal setting, and financial reports, the app
                empowers users to make informed decisions, streamline their financial
                management, and achieve their financial goals more efficiently.
                Whether you're looking to save more, spend less, or gain a better
                understanding of your finances, this app serves as a practical and
                intuitive solution for improving financial well-being.
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
        <br /><br />
        <StyledCard>
          <Card sx={{ bgcolor: 'cyan',maxWidth: 1340, maxHeight: 160 }}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                S<br />C<br />O<br />P<br />E
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 1340, maxHeight: 160 }}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                The scope of a finance app includes tracking and categorizing
                expenses and income, managing budgets, and setting financial goals.
                It provides users with insights through reports and visualizations,
                integrates with bank accounts for automated transaction updates, and
                offers features like alerts and reminders for bills and budget
                limits. The app aims to enhance financial management by making it
                easier to understand and control one's financial situation.
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
        <br />
        <Button variant="contained">
          <Link to="/" className="link">
            Back
          </Link>
        </Button>
      </ContentContainer>
    </div>
  );
};

export default About;
