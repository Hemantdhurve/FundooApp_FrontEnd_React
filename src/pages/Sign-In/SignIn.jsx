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
  body:{
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '60px',
    marginTop: '60px',
    position: 'relative',
  },
  log:{
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    height: '470px',
    width: '500px',
  },
  Head:{
    textAlign: 'center',
    padding: '10px',
    marginTop: '20px',
    fontSize: '25px',
  },
  subHead:{
    textAlign: 'center',
    padding: '3px',
    fontSize: '20px',
  },
  txt:{
    paddingLeft: '30px',
  },
  forgotBtn:{
    justifyContent: 'space-around',
    marginLeft: '24px',  
  },
  loginBtn:{
    display:'flex',
    position:'relative',
    marginTop: '30px',
    justifyContent:'space-between',
    width:'440px',
    marginLeft:'25px',
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
                  <Box >
                      <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Email or Phone" variant="outlined" margin='normal' style={{width:'435px'}}/>
                      <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" margin='normal' style={{width:'435px'}}/>
                  </Box>
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
