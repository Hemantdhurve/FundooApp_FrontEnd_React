import React, { useState } from 'react';
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../../services/UserService';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

const firstnameRegex = /^([A-Z]{1}[a-z]{2,}$)/;
const lastnameRegex = /^([A-Z]{1}[a-z]{2,}$)/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
  reg: {
    display: 'flex',
    borderRadius: '5px',
    boxSizing: 'border-box',
    width: '60vw',
    position: 'relative',
    height: '92vh',
    left: '20vw',
    top: '4vh',
    justifyContent: 'center',
  },

  dataCol: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    height: '79vh',
    top: '5vh',
    width: '34vw',
    marginLeft: '30px',
  },
  title: {
    display: 'flex',
    fontSize: '30px',
    width: '100%',
  },
  subTitle: {
    display: 'flex',
    position: 'relative',
    top: '2px',
    width: '100%',
    fontSize: '22px',
  },
  data: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',width: '100%',
    top: '25px',
  },
  user: {
    display: 'flex',
    position: 'relative',
    top: '35px',
    width: '100%',
  },
  pTag: {
    display: 'flex',
    position: 'relative',
    width: '94%',
    top: '8px',
    fontSize: '13px',
  },
  current: {
    display: 'flex',
    position: 'relative',
    width: '95%',
    bottom: '10px',
  },
  datapass: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    top: '8px',
  },
  pTag8: {
    display: 'flex',
    position: 'relative',
    width: '94%',
    bottom: '18px',
    fontSize: '13px',
  },
  check: {
    display: 'flex',
    position: 'relative',
    bottom: '40px',
    width: '98%',
    alignItems: 'center',
  },
  botNxtBtn: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
  },
  signUpLogo: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center',
    height: '50%',
    top: '20vh',
    right: '10px',
    textAlign: 'center',
  },
  lgo: {
    display: 'flex',
    position: 'relative',
    height: '230px',
    width: '230px',
  },
  lgoTxt: {
    display: 'flex',
    position: 'relative',
    width: '65%',
    marginTop: '5px',
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    reg: {
      width: '100%',
      position: 'relative',
      left: '0px',
      top: '0px',
      height: '100vh',

    },
    dataCol: {
      display: 'flex',
      width: '100%',
      position: 'relative',
      right: '10px',
    },
    data: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      rowGap: '10px',

    },
    pTag: {
      display: 'flex',
      position: 'relative',
      top: '20px',

    },
    current: {
      display: 'flex',
      position: 'relative',
      width: '90%',
      top: '5px',
      textAlign: 'start',

    },
    pTag8: {
      display: 'flex',
      position: 'relative',
      textAlign: 'start',
      top: '1px',
      width: '87%',
    },
    datapass: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '10px',
      position: 'relative',

    },
    check: {
      display: 'flex',
      position: 'relative',
      bottom: '15px',
      width: '90%',
      alignItems: 'center',
    },
    signUpLogo: {
      display: 'none',
    },
  },

  ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
    reg: {
      width: '100%',
      position: 'relative',
      left: '0px',
      top: '0px',
      height: '100vh',
    },
    dataCol: {
      width: '100%',
    },
    data: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      rowGap: '10px',
    },
    pTag: {
      display: 'flex',
      position: 'relative',
      top: '20px',
    },
    current: {
      display: 'flex',
      position: 'relative',
      width: '90%',
      top: '5px',
      textAlign: 'start',
    },
    datapass: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '10px',
      position: 'relative',

    },
    pTag8: {
      display: 'flex',
      position: 'relative',
      textAlign: 'start',
      bottom: '5px',
      width: '87%',
    },
    check: {
      display: 'flex',
      position: 'relative',
      bottom: '15px',
      width: '90%',
      alignItems: 'center',
    },
  },
  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    reg: {
      position: 'relative',
      left: '120px',
      width: '80%',
    },
    dataCol: {
      width: '100%',
    },
    pTag: {
      fontSize: '15px',
    },

    pTag8: {
      position: 'relative',
      bottom: '12px',
      fontSize: '15px',
      textAlign: 'start',
    },
    check: {
      fontSize: 'small',
    },

    signUpLogo: {
      display: 'flex',
      position: 'relative',
      width: '50%',
      top: '130px',
    },
    lgo: {
      height: '90%',
      width: '80%',
    },
    lgoTxt: {
      position: 'relative',
      bottom: '30px',
      width: '80%',
    },
  },

})

function SignUp() {
  const classes = useStyle()
  const [signUpstate, setsignUpState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  })
  const [regexState, setRegexState] = useState({
    firstNameBorder: false,
    firstNameHelper: "",
    lastNameBorder: false,
    lastNameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    confirmPasswordBorder: false,
    confirmPasswordHelper: ""
  })

  const takeFirstName = (event) => {
    console.log(event.target.value)
    setsignUpState((prevState) => ({ ...prevState, firstName: event.target.value }))
  }
  const takeLastName = (event) => {
    console.log(event.target.value)
    setsignUpState((prevState) => ({ ...prevState, lastName: event.target.value }))
  }

  const takeEmail = (event) => {
    console.log(event.target.value)
    setsignUpState((prevState) => ({ ...prevState, email: event.target.value }))
  }
  const takePassword = (event) => {
    console.log(event.target.value)
    setsignUpState((prevState) => ({ ...prevState, password: event.target.value }))
  }
  const takeConfirmPassword = (event) => {
    console.log(event.target.value)
    setsignUpState((prevState) => ({ ...prevState, confirmPassword: event.target.value }))
  }

  const signUpSuccess = () => {
    console.log(signUpstate)

    let checkFirstName = firstnameRegex.test(signUpstate.firstName)
    let checkLastName = lastnameRegex.test(signUpstate.lastName)
    let checkEmail = emailRegex.test(signUpstate.email)
    let checkPassword = passwordRegex.test(signUpstate.password)
    let checkConfirmPassword = passwordRegex.test(signUpstate.password)

    if (checkFirstName === true) {
      setRegexState((prevState) => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }))
    }
    else if (checkFirstName === false) {
      setRegexState((prevState) => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Enter a FirstName" }))

    }
    if (checkLastName === true) {
      setRegexState((prevState) => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }))
    }
    else if (checkLastName === false) {
      setRegexState((prevState) => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Enter a LastName" }))

    }

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
      setRegexState((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter a Password" }))

    }

    if (checkConfirmPassword === true) {
      setRegexState((prevState) => ({ ...prevState, confirmPasswordBorder: false, confirmPasswordHelper: "" }))
    }
    else if (checkConfirmPassword === false) {
      setRegexState((prevState) => ({ ...prevState, confirmPasswordBorder: true, confirmPasswordHelper: "Password not matched.." }))
    }

    if (checkFirstName === true && checkLastName === true && checkEmail === true && checkPassword === true) {
      signUpApi(signUpstate)
        .then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
      console.log('SignUp Successful')
      navigate('/')
    }

  }

  const navigate = useNavigate()

  const navSignPage = () => {
    navigate('/')
  }


  return (
    <Box>
      <Paper className={classes.reg} elevation={3} >
        <Box className={classes.dataCol}>
          <Box className={classes.title}> Fundoo</Box>
          <Box className={classes.subTitle}> Create your Fundoo Account</Box>
          <Box className={classes.data} >
            <TextField onChange={takeFirstName} error={regexState.firstNameBorder} helperText={regexState.firstNameHelper} id="outlined-basic" label="First Name" variant="outlined" size='small' />             
            <TextField onChange={takeLastName} error={regexState.lastNameBorder} helperText={regexState.lastNameHelper} id="outlined-basic" label="Last Name" variant="outlined" size='small' />
          </Box>
          <Box className={classes.user}>
            <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Username" variant="outlined" size='small' fullWidth={true} />
          </Box>
          <Box className={classes.pTag}>
            <p>You can use Letters,numbers or Periods</p>
          </Box>
          <Box className={classes.current}>
            <Button variant="text" size='small' onClick={navSignPage} >Use my current email address instead</Button>
          </Box>
          <Box className={classes.datapass}>
            <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" size='small' />
            <TextField onChange={takeConfirmPassword} error={regexState.confirmPasswordBorder} helperText={regexState.confirmPasswordHelper} id="outlined-basic" label="Confirm" variant="outlined" size='small' />
          </Box>
          <Box className={classes.pTag8}>
            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </Box>
          <Box className={classes.check}>
            <Checkbox /><span>Show Password</span>
          </Box>
          <Box className={classes.botNxtBtn}>
            <Button onClick={navSignPage} size='small' variant="text">Sign-in Instead</Button>
            <Button onClick={signUpSuccess} size='small' variant="contained">Next</Button>
          </Box>
        </Box>
        <Box className={classes.signUpLogo}>
          <img className={classes.lgo} src='./assets/signup.svg' alt="Signup Logo" />
          <p className={classes.lgoTxt} >One account. All of Fundoo working for you.</p>
        </Box>
      </Paper>
    </Box>
  )
}

export default SignUp;