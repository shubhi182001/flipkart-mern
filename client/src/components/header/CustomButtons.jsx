import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';
import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
const Wrapper = styled(Box)(({theme}) => ({
    display: "flex",
    margin :"0 3% 0 auto",

    '& > * ' :{
        marginRight: '40px !important' ,
        fontSize: '16px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }

}))
    
const Container = styled(Box)(({theme}) => ({
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;

`



const CustomButtons = () => {
    const [open, setOpen ] = useState(false)
    const openDialog = () =>{
        setOpen(true);
    }
    const {account, setAccount} = useContext(DataContext);
  return (
    <Wrapper>
        {
            account? <Profile account={account} setAccount = {setAccount}/>:
        <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>

        }
        <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog  open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons