import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Userpg from './Userpg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const styles = {
  table: {
    marginTop: '90px',
    backgroundColor: '#fff',
    marginLeft: '140vh',
    width: '40%'
  },
  userpg: {
    position: 'static',
    top: 0,
    left: 0,
    width: '100%',
    height: '0',
    zIndex: 1,
  }
};

const Showexpense = () => {
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();
  const { id } = location.state || { id: 'N/A' };

  useEffect(() => {
    const fetchExpenses = async () => {
        try {
            
            const response = await axios.get('http://localhost:3000/expenses', { params: { id } });
            console.log(response)
        if (response.data.status === 'success') {
            setTransactions(response.data.expenses);
           console.log("trans",setTransactions)
        } else {
          console.error('Error fetching expenses:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    if (id !== 'N/A') {
      fetchExpenses();
    }
  }, [id]);

  const handleDeleteTransaction = async (transactionId) => {
    try {
      const response = await axios.get('http://localhost:3000/delete-expense', { params: { transactionId, userId: id } });
      if (response.data.status === 'success') {
        // Remove the deleted transaction from the state
        setTransactions(transactions.filter(transaction => transaction._id !== transactionId));
      } else {
        console.error('Error deleting transaction:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };
  return (
    <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%'}}>
      <div style={styles.userpg}></div>
      <div style={styles.userpg}>
        <Userpg />
      </div>
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction._id}>
          
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.body}</TableCell>
              <TableCell>
                <Button color="secondary" onClick={() => handleDeleteTransaction(transaction._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Showexpense;
