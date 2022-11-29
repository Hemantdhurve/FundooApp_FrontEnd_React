import React,{useState} from 'react';
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../../services/UserService';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const firstnameRegex=/^([A-Z]{1}[a-z]{2,}$)/;
const lastnameRegex=/^([A-Z]{1}[a-z]{2,}$)/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle=makeStyles({
    reg:{
      display: 'flex',
      borderRadius: '5px',
    },
    title:{
      marginTop: '25px',
      paddingLeft: '35px',
      fontSize: '35px',
      position: 'relative',
    },
    subTitle:{
      marginTop: '10px',
      paddingLeft: '35px',
      marginBottom: '15px',
      fontSize: '25px',
    },
    dataCol:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: '35px',
      paddingRight: '35px',
    },
    data:{
      display: 'flex',
      justifyContent: 'space-between',
      width: '33.5vw',
    },
    user:{
      width: '33.5vw',
    },
    pTag:{
      width: '30vw',
      paddingLeft: '15px',
      marginTop: '-17px',
      fontSize: '13px',
    },
    current:{
      color: '#1a73e8',
      paddingLeft: '3px',
      fontSize: '16px',
    },
    checkBx:{
      marginLeft: '10px',
      size: '40px',
    },
    botNxtBtn:{
      display: 'flex',
      justifyContent: 'space-between',
      width: '33.5vw',
      marginTop: '25px',
      marginBottom: '35px',
    },
    signUpLogo:{
      width: '240px',
      justifyItems: 'center',
      paddingTop: '120px',
      textAlign: 'center',
    },
    lgo:{
      height: '230px',
      width: '230px',
    },
    lgoTxt:{
      marginTop: '5px',
    },


})

function SignUp() 
{
  const classes=useStyle()
    const [signUpstate,setsignUpState]=useState({ 
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        
    })
    const [regexState,setRegexState]=useState({
        firstNameBorder:false,
        firstNameHelper:"",
        lastNameBorder:false,
        lastNameHelper:"",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        confirmPasswordBorder: false,
        confirmPasswordHelper: ""
    })
    
    const takeFirstName=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState)=>({...prevState, firstName: event.target.value}))
    }
    const takeLastName=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState)=>({...prevState, lastName: event.target.value}))
    }
    
    const takeEmail=(event)=>{
        console.log(event.target.value)
        setsignUpState((prevState)=>({...prevState, email: event.target.value}))
    }
    const takePassword=(event)=>{
        console.log( event.target.value)
        setsignUpState((prevState)=>({...prevState,password: event.target.value}))
    }
    const takeConfirmPassword=(event)=>{
        console.log( event.target.value)
        setsignUpState((prevState)=>({...prevState,confirmPassword: event.target.value}))
    }

    const signUpSuccess=()=>
    {
        console.log(signUpstate)

        let checkFirstName=firstnameRegex.test(signUpstate.firstName)
        let checkLastName=lastnameRegex.test(signUpstate.lastName)
        let checkEmail=emailRegex.test(signUpstate.email)
        let checkPassword=passwordRegex.test(signUpstate.password)
        let checkConfirmPassword=passwordRegex.test(signUpstate.password)

        if(checkFirstName===true)
        {
          setRegexState((prevState)=>({...prevState, firstNameBorder:false,firstNameHelper:""}))
        }
        else if(checkFirstName===false)
        {
          setRegexState((prevState)=>({...prevState, firstNameBorder:true,firstNameHelper:"Enter a FirstName"}))
  
        }
        if(checkLastName===true)
        {
          setRegexState((prevState)=>({...prevState, lastNameBorder:false,lastNameHelper:""}))
        }
        else if(checkLastName===false)
        {
          setRegexState((prevState)=>({...prevState, lastNameBorder:true,lastNameHelper:"Enter a LastName"}))
  
        }

        if(checkEmail===true)
        {
          setRegexState((prevState)=>({...prevState, emailBorder:false, emailHelper:""}))
        }
        else if(checkEmail===false)
        {
          setRegexState((prevState)=>({...prevState, emailBorder:true,emailHelper:"Enter a correct Email"}))
  
        }
  
        if(checkPassword===true)
        {
          setRegexState((prevState)=>({...prevState, passwordBorder:false,passwordHelper:""}))
        }
        else if(checkPassword===false)
        {
          setRegexState((prevState)=>({...prevState, passwordBorder:true,passwordHelper:"Enter a Password"}))
  
        }

        if(checkConfirmPassword===true)
        {
          setRegexState((prevState)=>({...prevState, confirmPasswordBorder:false,confirmPasswordHelper:""}))
        }
          else if(checkConfirmPassword===false)
        {
          setRegexState((prevState)=>({...prevState, confirmPasswordBorder:true,confirmPasswordHelper:"Password not matched.."}))
        }
        
        if(checkFirstName===true && checkLastName===true && checkEmail===true && checkPassword===true )
        {
        signUpApi(signUpstate)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
        console.log('SignUp Successful')
        }
  
    }

    const navigate=useNavigate()

    const navSignPage=()=>{
      navigate('/')
    }


  return (
    <Box>
        <Paper className={classes.reg} elevation={3}>
            <Box >
                <Box className={classes.title}> Fundoo</Box>
                <Box className={classes.subTitle}> Create your Fundoo Account</Box>
                <Box className={classes.dataCol}>
                    <Box className={classes.data} >
                        <TextField onChange={takeFirstName} error={regexState.firstNameBorder} helperText={regexState.firstNameHelper} id="outlined-basic" label="First Name" variant="outlined" size='small' margin='normal'/>          
                        <TextField onChange={takeLastName} error={regexState.lastNameBorder} helperText={regexState.lastNameHelper} id="outlined-basic" label="Last Name" variant="outlined" size='small' margin='normal'/>          
                    </Box>
                    <Box className={classes.user}>
                        <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Username" variant="outlined" size='small' margin='normal' fullWidth={true}/>          
                    </Box>
                    <Box className={classes.pTag}>
                        <p>You can use Letters,numbers or Periods</p> 
                    </Box>
                    <Box className={classes.current}>
                        <Button variant="text">Use my current email address instead</Button>
                    </Box>
                    <Box className={classes.data}>
                        <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" size='small' margin='normal'/>          
                        <TextField onChange={takeConfirmPassword} error={regexState.confirmPasswordBorder} helperText={regexState.confirmPasswordHelper} id="outlined-basic" label="Confirm" variant="outlined" size='small' margin='normal'/>          
                    </Box>
                    <Box className={classes.pTag}>
                        <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    </Box>
                    <Box className={classes.checkbx}>
                        <input type= 'checkbox' value='Show Password' name = 'Show Password' /> <label>Show Password</label>
                    </Box><br></br>
                    <Box className={classes.botNxtBtn}>
                        <Button onClick={navSignPage} variant="text">Sign-in Instead</Button>
                        <Button onClick={signUpSuccess} variant="contained">Next</Button>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.signUpLogo}>
                  <img className={classes.lgo} src='./assets/signup.svg' alt="Signup Logo"/>
                  <p className={classes.lgoTxt} >One account. All of Fundoo working for you.</p>
            </Box>
        </Paper>
    </Box>
  )
}

export default SignUp;