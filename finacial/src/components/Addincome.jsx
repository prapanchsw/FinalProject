import { Button, Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Userpg from './Userpg';
import { BorderColor, BorderColorOutlined, Margin, ScoreOutlined } from '@mui/icons-material';

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
        marginLeft:'110px',
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

const Addincome = () => {
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTransaction = (e) => {
        e.preventDefault();
        const newTransaction = { id: transactions.length + 1, amount, category, date, description };
        setTransactions([...transactions, newTransaction]);
        setAmount('');
        setCategory('');
        setDate('');
        setDescription('');
    };

    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    return (
        <div style={{  overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%' ,paddingLeft:'30px'}}>
            
            <div style={styles.userpg}>
                <Userpg />
            </div>

            {/* Main Content */}
            <Container style={styles.root}>
                <Typography variant="h4"  gutterBottom>User Dashboard</Typography>
                <Paper style={styles.form} elevation={3} >
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
    )
}

export default Addincome;
