import React from 'react'
import './Registration.css'; 


function Registration() {
    return (
      <div>
        <form className='reg'>
          <div className='main'>
            <div className='title'> Fundoo</div>
            <div className='sub-title'> Create your Fundoo Account</div>

            <div>
              <div className='data'>
                  <input name='FirstName' placeholder='Enter First name' type={'FirstName'} label={'FirstName'} />
                  <input name='LastName' placeholder='Enter Last name' type={'LastName'} label={'LastName'} />
              </div>
              <div className='user'>
                <input name='UserName' placeholder='UserName' type={'UserName'} label={'UserName'} />
              </div>
              <div className='p-tag'>
                <p>You can use Letters,numbers or Periods</p> 
              </div>
              <div className='current'>
                <a className='ancr' href="">Use my current email address instead</a>
              </div>
              <div className='data'>
                <input name='Password' placeholder='Password' type={'FirstName'} label={'FirstName'} />
                <input name='Confirm' placeholder='Confirm' type={'LastName'} label={'LastName'} />
              </div>
              <div className='p-tag'>
                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
              </div>
              <div className='checkbx'>
                <input type= 'checkbox' value='Show Password' name = 'Show Password' /> <label>Show Pasword</label>
              </div><br></br>
              <div className='bot-nxt-bt'>
                <div className='bot-line'>
                  <a href=""> Sign-In Instead</a>
                </div>
                <button>Next</button>
              </div>
              
            </div>
          </div>
          <div className='signup-logo'>
            <img className='lgo' src='./assets/logo.png' alt="image"/>
            <p>One account. All of Fundoo working for you.</p>
          </div>
        </form>
      </div>
    )
  }

export default Registration;