import React, { useEffect, useState } from 'react'
import AdminPage from './AdminPage';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from "axios"
import { styled } from '@mui/material/styles';
import { DeleteForever, DeleteOutlineOutlined, Person2Outlined } from '@mui/icons-material';
import { useLocation ,useNavigate} from 'react-router-dom';
const styles = {
    root: {
        textAlign: 'center',
        paddingLeft: '100px',
        position: 'relative',
        zIndex: 1, 
        width: '100%',
        borderRadius: '40px',
    paddingTop: '40px',
      paddingLeft:'120px'
      
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
    admin: {
        position: 'static',
        top: 0,
        left: 0,
        width: '100%',
        height: '10%',
        zIndex: 1, 
    },
};
    
const StyledCard = styled(Card)({
    backgroundColor: '#e0f7fa',
    marginBottom: '20px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'flex',
    '&:hover': {
      transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        backgroundColor:'#00ffc7'
    
    },
});

const Useradmin = () => {
    const [users, setUsers] = useState([]);
    const location=useLocation()
    const navigate = useNavigate()
  const { email, name, id } = location.state || {id:'N/A',name:'N/A',email:'N/A'};
  console.log('adminid',id,email,name)
    // console.log(email, name, id)
    useEffect(() => {
        //axios'get("url").then().catch()
        axios.get("http://localhost:3000/userview")
            .then(
                (res) => {
                    console.log(res);
                    setUsers(res.data)
                })
            .catch((err) => {
                    console.log(err)
            })
        },[]);
        const deleteUser = (userId) => {
          axios.delete(`http://localhost:3000/remove/${userId}`)
              .then(() => {
                  setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
              })
              .catch(err => {
                  console.error(err);
              });
      };
 
    return (
        
          
      
      <div style={{ overflow: 'hidden', position: 'relative', height: '100vh', width: '100%',paddingLeft: '30px',paddingRight:'40px' }}>
           <div style={styles.admin}>
                <AdminPage />
            </div>
            <Container style={styles.root} >
            <Grid container spacing={3} sx={{width:'170vh', overflowX: 'hidden'}}>
            {
                users.map((val, i) => {
                    return (
                    
                      <Grid item xs={12} sm={6} md={4} lg={3} key={val._id}>
                         <Button sx={{backgroundColor:'#e0f7fa'}}
                              onClick={() => deleteUser(val._id)}>
                                <DeleteOutlineOutlined sx={{fontSize: 40, color:'green'}}></DeleteOutlineOutlined>
                              </Button>
                            <StyledCard sx={{ maxWidth: 345 }} style={styles.card}
                          onClick={() => navigate(('/useradmin/view'), { state: { detail: val.title, id: val._id, email: val.email, name: val.name, adminid: id, adminname: name, adminemail: email} })}
                                >
                            
                          <CardActionArea>
                         
                          <CardMedia
                          />
                                        <CardContent>
                                            <Person2Outlined sx={{fontSize: 100, color:'green'}}></Person2Outlined>
                            <Typography gutterBottom variant="h5" component="div">
                              {val.name}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                            {val.email}
                                            </Typography>
                                            <Typography variant="h6" color="text.secondary">Transactions:
                            {val.transactionCount}
                              </Typography>
                            
                          </CardContent>
                        </CardActionArea>
                        </StyledCard>
                     
                            </Grid>
                            
                    );
                  }
                       
                        )}
                    </Grid>
               </Container>
    </div>
  )
}

export default Useradmin
