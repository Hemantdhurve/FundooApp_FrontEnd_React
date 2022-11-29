import React,{useState} from 'react';
import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { signUpApi } from '../../services/UserService';

const firstnameRegex=/^([A-Z]{1}[a-z]{2,}$)/;
const lastnameRegex=/^([A-Z]{1}[a-z]{2,}$)/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignUp() 
{
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

  return (
    <div>
        <form className='reg'>
          <div className='main'>
                <div className='title'> Fundoo</div>
                <div className='sub-title'> Create your Fundoo Account</div>

                <div className='data-col'>
                <div className='data'>
                    <TextField onChange={takeFirstName} error={regexState.firstNameBorder} helperText={regexState.firstNameHelper} id="outlined-basic" label="First Name" variant="outlined" size='small' margin='normal'/>          
                    <TextField onChange={takeLastName} error={regexState.lastNameBorder} helperText={regexState.lastNameHelper} id="outlined-basic" label="Last Name" variant="outlined" size='small' margin='normal'/>          
                </div>
                <div className='user'>
                    <TextField onChange={takeEmail} error={regexState.emailBorder} helperText={regexState.emailHelper} id="outlined-basic" label="Username" variant="outlined" size='small' margin='normal' fullWidth={true}/>          
                </div>
                <div className='p-tag'>
                    <p>You can use Letters,numbers or Periods</p> 
                </div>
                <div className='current'>
                <Button variant="text">Use my current email address instead</Button>
                </div>
                <div className='data'>
                    <TextField onChange={takePassword} error={regexState.passwordBorder} helperText={regexState.passwordHelper} id="outlined-basic" label="Password" variant="outlined" size='small' margin='normal'/>          
                    <TextField onChange={takeConfirmPassword} error={regexState.confirmPasswordBorder} helperText={regexState.confirmPasswordHelper} id="outlined-basic" label="Confirm" variant="outlined" size='small' margin='normal'/>          
                </div>
                <div className='p-tag'>
                    <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                </div>
                <div className='checkbx'>
                    <input type= 'checkbox' value='Show Password' name = 'Show Password' /> <label>Show Pasword</label>
                </div><br></br>
                <div className='bot-nxt-bt'>
                    <div className='bot-line'>
                    <Button variant="text">Sign-in Instead</Button>
                    </div>
                    <Button onClick={signUpSuccess} variant="contained">Next</Button>
                </div>
            </div>
          </div>

          <div className='signup-logo'>
                <img className='lgo' src='./assets/signup.svg' alt="Signup Logo"/>
                <p className='lgo-txt' >One account. All of Fundoo working for you.</p>
          </div>
        </form>
    </div>
  )
}

export default SignUp;