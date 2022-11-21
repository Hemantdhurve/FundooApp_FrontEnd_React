import axios from 'axios';

export const logInApi=(logInstate)=>{

    let response=axios.post('https://localhost:44395/api/User/Login',logInstate)
    return response;
}

export const signUpApi=(signUpstate)=>{

    let response=axios.post('https://localhost:44395/api/User/Register',signUpstate)
    return response;
}