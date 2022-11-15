import React,{useState} from 'react';
import './SignIn.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { logInApi } from '../../services/Dataservice';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn()
{
    const [logInstate,setlogInstate]=useState({ 
      email:"",
      password:""
    })
    const [regexState,setRegexState]=useState({
      emailBorder: false,
      emailHelper: "",
      passwordBorder: false,
      passwordHelper: ""
    })
    const takeEmail=(event)=>{
      console.log( event.target.value)
      setlogInstate((prevState)=>({...prevState, email: event.target.value}))
    }
    const takePassword=(event)=>{
      console.log( event.target.value)
      setlogInstate((prevState)=>({...prevState,password: event.target.value}))
    }
    const logInSuccess=(event)=>
    {
          console.log(logInstate)

          event.preventDefault();

        
          let checkEmail=emailRegex.test(logInstate.email)
          let checkPassword=passwordRegex.test(logInstate.password)

      //validating
      if(checkEmail===true)
      {
        setRegexState((prevState)=>({...prevState, emailBorder:false,emailHelper:""}))
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
        setRegexState((prevState)=>({...prevState, passwordBorder:true,passwordHelper:"Enter a correct Password"}))

      }

       //API Calling

      if(checkEmail===true && checkPassword===true)
      {
        logInApi(logInstate)
        .then((response)=>{console.log(response)})
        .catch((error)=>{console.log(error)})
        console.log('Login Successful')
      }
    }

    return (
     <div>
      <form className='log' >
        <div className='Head'> Fundoo</div>
        <div className='sub-head' > Sign-In</div>
        <div className='sub-head'>Use your Fundoo Account</div>
        <div className='txt'>
          <div className='inp'>
              <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Email or Phone" variant="outlined" size='small' margin='normal'/>          
          </div>
          <div className='inp'>
              <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" />
            </div>
        </div>
        <div>
          <div className='forgot-btn'>
          <Button variant="text">Forgot Password?</Button>
          </div>
          <div>
            <button type="button" onClick={logInSuccess} className='login-btn'> Login </button>
          </div>
        </div>
        <div className='acc'>
        <Button variant="text">Create Account</Button>
        </div>
        
        </form>
     </div>
      
    );
  }


export default SignIn;
