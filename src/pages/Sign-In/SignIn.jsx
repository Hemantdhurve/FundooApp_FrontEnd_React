import React, { useState } from 'react';
import './SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { logInApi } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle=makeStyles({
   log:{
    display: 'flex',
    flexDirection: 'column',
    boxSizing:'border-box',
    borderRadius: '5px',
    height: '75vh',
    width: '36vw',
    position: 'relative',
    top: '15vh',
    alignItems:'center',
    left:'30vw',
    // border:'1px solid black',

  },
  Head:{
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
    top: '20px',
    fontSize: '25px',
  },
  subHead:{
    display: 'flex',
    position: 'relative',
    top:'30px',
    textAlign: 'center',
    fontSize: '20px',
    marginBottom:'10px',
  },
  txt:{
    display: 'flex',
    position: 'relative',
    flexDirection:'column',
    width:'90%',
    top:'40px',
    textAlign: 'center',
  },
  forgotBtn:{
    display: 'flex',
    position: 'relative',
    width:'100%',
    top:'35px',
    left:'25px',
  },
  loginBtn:{
    display:'flex',
    position:'relative',
    top: '80px',
    width:'90%',
    justifyContent:'space-between',
  },

  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    log:{
      boxSizing:'border-box',
      width:'100%',
      position: 'relative',
      left:'13px'
    },
  },
  ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
    log:{
      width:'100%',
      position: 'relative',
      width:'100%',
      alignItems:'center',
      left:'13px',
    },   
  },
  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    log:{
      display:'flex',
      position: 'relative',
      width:'60vw',
      left:'20vw',
      top:'13vh',
    },  
  },
})
function SignIn() {

  const classes=useStyle()
  
  const [logInstate, setlogInstate] = useState({
    email: "",
    password: ""
  })
  const [regexState, setRegexState] = useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: ""
  })
  const takeEmail = (event) => {
    console.log(event.target.value)
    setlogInstate((prevState) => ({ ...prevState, email: event.target.value }))
  }
  const takePassword = (event) => {
    console.log(event.target.value)
    setlogInstate((prevState) => ({ ...prevState, password: event.target.value }))
  }

  
  const navigate = useNavigate()
  
  //Navigate to SignUp page
  const navAccountCreate=()=>{
    navigate('/signup')
  }

  const logInSuccess = (event) => {
    console.log(logInstate)

    event.preventDefault();


    let checkEmail = emailRegex.test(logInstate.email)
    let checkPassword = passwordRegex.test(logInstate.password)

    //validating
    if (checkEmail === true) {
      setRegexState((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
    }
    else if (checkEmail === false) {
      setRegexState((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter a correct Email" }))

    }

    if (checkPassword === true) {
      setRegexState((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
    }
    else if (checkPassword === false) {
      setRegexState((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter a correct Password" }))

    }

    //API Calling

    if (checkEmail === true && checkPassword === true) {
      logInApi(logInstate)
        .then((response) => {
          console.log(response)
          localStorage.setItem("token", response.data.data)
          //Navigate to dashboard
          navigate('/dashboard')
        })
        .catch((error) => { console.log(error) })
      console.log('Login Successful')
    }
  }

  return (
      <Box>
          <Paper className={classes.log} elevation={3}>
              <Box className={classes.Head}> Fundoo</Box>
              <Box className={classes.subHead} > Sign-In</Box>
              <Box className={classes.subHead}>Use your Fundoo Account</Box>
              <Box className={classes.txt}>
                  
                      <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Email or Phone" variant="outlined" margin='normal' fullWidth="true" />
                      <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" margin='normal' fullWidth='true'/>
                  
              </Box>              
              <Box className={classes.forgotBtn}>
                  <Button variant="text">Forgot Password?</Button>
              </Box>
              <Box className={classes.loginBtn} >                          
                  <Button onClick={navAccountCreate} variant="text">Create Account</Button>
                  <Button variant="contained" onClick={logInSuccess} > Login </Button>
              </Box>                  
          </Paper>
      </Box>
   );
}


export default SignIn;
