import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import SignIn from '../Sign-In/SignIn';
import SignUp from '../Sign-Up/SignUp';

function Router1() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />}/>
                <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Router1;