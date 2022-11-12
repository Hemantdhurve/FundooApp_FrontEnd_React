import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';

function Login(){
    return (
     <div>
      <form className='log'>
        <div className='Head'> Fundoo</div>
        <div className='sub-head' > Sign-In</div>
        <div className='sub-head'>Use your Fundoo Account</div>
        <div >
          <div className='inp'>
              <TextField id="outlined-basic" label="Email or Phone" variant="outlined" size='small' />          
          </div>
          <div className='inp'>
              <TextField id="outlined-basic" label="Password" variant="outlined" />
            </div>
        </div>
        <div>
          <div>
            <a className='forgot-btn' href='' > Forgot Password? </a>
          </div>
          <div>
            <button className='login-btn'> Login </button>
          </div>
        </div>
        <div>
          <a href=''>Create Account</a>
        </div>
        
        </form>
     </div>
      
    );
  }


export default Login;
