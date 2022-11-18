import axios from 'axios';

export const logInApi=(loginObj)=>{

    let response=axios.post('https://localhost:44395/api/User/Login',loginObj)
    return response;
}

export const signUpApi=(signUpstate)=>{

    let response=axios.post('https://localhost:44395/api/User/Register',signUpstate)
    return response;
}