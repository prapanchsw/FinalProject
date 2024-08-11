import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbaruser = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 ,paddingTop:'0',width:"221vh"}} className='navbar1'>
      <AppBar sx={{backgroundColor:'#151515', borderBottom: 'grey' }} >
        <Toolbar>
         
            

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'white' }}>
           UserPanel
          </Typography>
          <Button  id="btnnav"><Link to='/login' >LogOut</Link></Button>
        </Toolbar>
      </AppBar>
          </Box>
          
    </div>
  )
}

export default Navbaruser
