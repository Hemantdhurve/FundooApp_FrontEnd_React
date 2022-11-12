import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login(){
    return (
     <div>
      <form className='log'>
        <div className='Head'> Fundoo</div>
        <div className='sub-head' > Sign-In</div>
        <div className='sub-head'>Use your Fundoo Account</div>
        <div className='txt'>
          <div className='inp'>
              <TextField id="outlined-basic" label="Email or Phone" variant="outlined" size='small' margin='normal'/>          
          </div>
          <div className='inp'>
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
        </div>
        <div>
          <div className='forgot-btn'>
          <Button variant="text">Forgot Password?</Button>
          </div>
          <div>
            <button className='login-btn'> Login </button>
          </div>
        </div>
        <div className='acc'>
        <Button variant="text">Create Account</Button>
        </div>
        
        </form>
     </div>
      
    );
  }


export default Login;
