import axios from 'axios';

let headerConfig={
    headers :{Authorization : `Bearer ${localStorage.getItem("token")}`}
}


export const createNoteAPI=(noteObj)=>{

    let response=axios.post('https://localhost:44395/api/Notes/Create',noteObj,headerConfig)
    console.log("create api")
    return response;
}

export const getAllNoteAPI=()=>{
 
    let response=axios.get('https://localhost:44395/api/Notes/RetrieveAll',headerConfig)
    console.log("Get All api")
    return response;
}