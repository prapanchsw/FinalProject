import React from 'react'
import AdminPage from './AdminPage';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation ,useNavigate} from 'react-router-dom';


const styles = {
  table: {
    marginTop: '90px',
    backgroundColor: '#fff',
    marginLeft: '140vh',
    width: '37%',
    borderRadius: '10px'
  },
  AdminPage: {
    position: 'static',
    top: 0,
    left: 0,
    width: '100%',
    height: '0',
    zIndex: 1,
  }
};

const Adminexpenseview = () => {
  const [transactions, setTransactions] = useState([]);
    const location = useLocation();
    const navigate = useNavigate()


  const { id,adminid,adminemail,adminname} = location.state || { id: 'N/A',adminid:'N/A',adminemail:'N/A',adminname:'N/A' };
 console.log('Id',id,adminid,adminemail,adminname)
  useEffect(() => {
    const fetchExpenses = async () => {
        try {
            
            const response = await axios.get('http://localhost:3000/expenses', { params: { userId: id } });
      
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


  return (
    <div style={{ overflowX: 'hidden', position: 'relative', height: '100vh', width: '100%', paddingLeft: '0px',paddingRight:'200vh'}}>
     
      <Table style={styles.table}>
        <TableHead>
          <TableRow>
    
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction._id}>

              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <br />
        <Button variant='contained' ><Link to='/useradmin'  state={{id:adminid,name:adminname,email:adminemail}}> Back</Link>
 
</Button>
      </Table>
     
      {/* {() => navigate({ state: { detail: val.title, id: val._id, email: val.email, name: val.name} })} */}
   
    </div>
  );
};


export default Adminexpenseview
