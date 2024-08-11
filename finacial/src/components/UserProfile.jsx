import { Avatar, Box, Button, Container, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Userpg from './Userpg';
import { BorderColor, BorderColorOutlined, Edit, Margin, ScoreOutlined } from '@mui/icons-material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
    root: {
        textAlign: 'center',
        padding: '40px',
        position: 'relative',
        zIndex: 1, 
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
    userpg: {
        position: 'static',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: 1, 
      
    },
    avatar: {
        width: '80px',
        height: '80px',
    },
    divider: {
        margin: '20px 0',
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
        padding: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%',
    },




};

const UserProfile = () => {
  
    const location = useLocation();
    const { email, name, id } = location.state || { };
    const [transactionCount, setTransactionCount] = useState(0);
    const navigate = useNavigate()
   
    useEffect(() => {
        axios.get("http://localhost:3000/userview")
            .then((res) => {
                const user = res.data.find(u => u._id === id);
                if (user) {
                    setTransactionCount(user.transactionCount || 0);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);
    
    const handleEditClick = () => {
        console.log(email,id,name)
        navigate(`/update`, { state: { id,email,name} });
    };



      return (
        <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%', backgroundColor: '#f5f5f5'}}>
         <div style={styles.userpg}>
                <Userpg />
            </div>


    
        {/* Main Content */}
              <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 80px)' }}>
            
                  <Paper style={styles.profileContainer}>
                      <Button onClick={handleEditClick}><Edit sx={{paddingRight:'70vh',paddingTop:'-40px'}}></Edit></Button>
                <Avatar style={styles.avatar} src="data:image/png;base64,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" />
                      <Typography variant="h5" color="primary" style={{ marginTop: '20px' }}> {name}</Typography>
                <Divider style={styles.divider} />
                <div style={styles.profileDetails} >
                    <Typography variant="body1" style={styles.profileItem}><strong>Email:</strong> {email}</Typography>
                    <Typography variant="body1" style={styles.profileItem}><strong>Transactions:</strong> {transactionCount}</Typography>
                   
                </div>
            </Paper>
        </Container>
    </div>
    
    );
};

export default UserProfile;