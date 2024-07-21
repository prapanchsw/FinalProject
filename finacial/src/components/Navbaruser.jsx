import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbaruser = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 ,paddingTop:'0',width:"221vh"}} className='navbar1'>
      <AppBar sx={{backgroundColor:'#000910', borderBottom: '2px solid #01ffc9' }} >
        <Toolbar>
         
            

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#00ffc7' }}>
           UserPanel
          </Typography>
          <Button color="inherit" id="btnnav">Login Out</Button>
        </Toolbar>
      </AppBar>
          </Box>
          
    </div>
  )
}

export default Navbaruser
