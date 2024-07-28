import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import Userpg from './Userpg';
import { useLocation } from 'react-router-dom';

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
        marginLeft: '110px',
        padding: '20px',
        backgroundColor: '',
        
        borderRadius: '20px',
    },
    userpg: {
        position: 'static',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: 1,
    }
};

const Addincome = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    
    const location = useLocation();
    const { email, userId } = location.state || {}; // Ensure userId is available in the state

    const handleAddTransaction = async (e) => {
        e.preventDefault();
    
        // Check if all fields are filled
        if (!amount || !category || !date || !description) {
            console.error('Please fill out all required fields.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3000/addexpense', {
                email: email.trim(), 
                category,
                body: description, 
                amount,
                date,
            });
    
            console.log('Transaction added:', response.data);
    
          
            setAmount('');
            setCategory('');
            setDate('');
            setDescription('');
        } catch (error) {
            console.error('Error adding transaction:', error.response.data);
        }
    };
    

    return (
        <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%', paddingLeft: '30px' }}>
            <div style={styles.userpg}>
                <Userpg />
            </div>
            <Container style={styles.root}>
                <Typography variant="h4" gutterBottom>User Dashboard</Typography>
                <Paper style={styles.form} elevation={3}>
                    <form onSubmit={handleAddTransaction}>
                        <TextField
                            label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                            Add
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Addincome;
