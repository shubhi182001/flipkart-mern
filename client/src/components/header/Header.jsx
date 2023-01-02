import React from 'react'
import {AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer,List, ListItem} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


//How to use styled component in mui:
const StyledHeader = styled(AppBar)`
    background: #514CE8k;
    height: 55px;
`
const StyledBox = styled(Link)`
  	margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic
`
const PlusImage = styled('img')({
  width: 10,
  height:10,
  marginLeft: 4
})
const CustomButtonWrapper = styled(Box)(({theme}) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down('md')]: {
    display: "none"
  }
}))
    
const MenuButton = styled(MenuIcon)(({theme}) => ({
  display:"none",
  [theme.breakpoints.down('md')]:{
    display:"block"
  }
}))





const Header = () => {

  const[drawerOpen, setDrawerOpen] = useState(false);
  const handleOpen = () => {
    setDrawerOpen(true);
  }
  
  const handleClose = () => {
    setDrawerOpen(false);
  }

  const list = () => {
    return(
    <Box style={{width: 200}} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButtons/>
        </ListItem>
      </List>
    </Box>

    )
  }
  

  const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subUrl =  'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <div className='header'>
        <StyledHeader>
            <Toolbar style={{minHeight:"55px"}}>
              <IconButton color='inherit' onClick={handleOpen}>
                <MenuButton />
              </IconButton>

              <Drawer open={drawerOpen} onClose={handleClose}>
                {list()}
              </Drawer>


              <StyledBox to="/">
                <PlusImage src={logoUrl} alt="logo" style={{width:"74px"}} />
                <Box style={{display:"flex"}}>
                  <SubHeading>Explore&nbsp; 
                    <Box component="span" style={{color: '#FFE500'}}>
                      Plus
                    </Box>
                  </SubHeading>
                  <PlusImage src={subUrl} alt="error" />
                </Box>
              </StyledBox>
              <Search/>
              <CustomButtonWrapper>
                <CustomButtons/>
              </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    </div>
  )
}

export default Header