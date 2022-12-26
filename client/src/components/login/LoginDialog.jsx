import React from "react";
import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

import { authenticateSignup } from "../../service/api";


const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
  `;

  const Image = styled(Box)`
    background: #2874f0
      url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
      center 80% no-repeat;
    color: white;
    height: 84.2%;
    flex: 2;
    width: 20%;
    padding: 45px 35px;
  `;
  const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 3;
    & > div,
    & > button,
    & > p {
      margin-top: 20px;
    }
  `;
  const 
  LoginButton = styled(Button)`
    text-transform: none;
    background: #f86418;
    color: white;
    height: 48px;
    border-radius: 2px;
  `;
  const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  `;

  const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
  `;
  const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
  `;


const accountInitialValues = {
  login: {
    view: 'login',
    heading:"Login",
    subHeading:"Get access to your Orders, Wishlist "
  },
  signup: {
    view: 'signup',
    heading:"Looks like you're new here",
    subHeading: "Sign up with your mobile number to get started"
  }
}

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone:""
}

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login)
  const [signup, setSignup] = useState(signupInitialValues);

  const { setAccount} = useContext(DataContext);
  
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  }
  const toggleSignIn = () => {
    toggleAccount(accountInitialValues.login)
  }
  
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login)
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  }

  const signupUser = async() => {
    try{
      let response = await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.firstname);
    }catch(e){
      console.log(e);
    }
  }



  

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h4" style={{ marginBottom: "25px" }}>
              {" "}
              {account.heading}{" "}
            </Typography>
            <Typography variant="h6">
              {" "}
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === 'login' ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Phone number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy{" "}
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP </RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" />
              <LoginButton onClick={() => signupUser()}>Sign Up</LoginButton>

              <CreateAccount onClick={() => toggleSignIn()}>Already have an account? Login Here</CreateAccount>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
