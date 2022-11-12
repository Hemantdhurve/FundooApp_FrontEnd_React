import React from 'react'
import './Registration.css'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Registration() {
    return (
      <div>
        <form className='reg'>
          <div className='main'>
            <div className='title'> Fundoo</div>
            <div className='sub-title'> Create your Fundoo Account</div>

            <div className='data-col'>
              <div className='data'>
                <TextField id="outlined-basic" label="First Name" variant="outlined" size='small' margin='normal'/>          
                <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small' margin='normal'/>          
              </div>
              <div className='user'>
                <TextField id="outlined-basic" label="Username" variant="outlined" size='small' margin='normal' fullWidth='bool'/>          
              </div>
              <div className='p-tag'>
                <p>You can use Letters,numbers or Periods</p> 
              </div>
              <div className='current'>
              <Button variant="text">Use my current email address instead</Button>
              </div>
              <div className='data'>
                <TextField id="outlined-basic" label="Password" variant="outlined" size='small' margin='normal'/>          
                <TextField id="outlined-basic" label="Confirm" variant="outlined" size='small' margin='normal'/>          
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
                <Button variant="contained">Next</Button>
              </div>

            </div>
          </div>
          <div className='signup-logo'>
            <img className='lgo' src='./assets/signup.svg' alt="image"/>
            <p>One account. All of Fundoo working for you.</p>
          </div>
        </form>
      </div>
    )
  }

export default Registration;