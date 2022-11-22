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

export const getArchievenoteAPI=(noteId)=>{
    let response = axios.put(`https://localhost:44395/api/Notes/Archieve?noteId=${noteId}`,noteId,headerConfig)
    console.log("Archieved Successful")
    return response;
}

export const deletenoteAPI=(noteId)=>{
    let response= axios.put(`https://localhost:44395/api/Notes/Trash?noteId=${noteId}`,noteId,headerConfig)
    console.log("Notes Deleted")
    return response;
}


export const updateColorAPI=(input)=>{
    let response=axios.put(`https://localhost:44395/api/Notes/Color?noteId=${input.noteId}&backgroundcolor=${input.backgroundcolor}`,input,headerConfig)
    console.log("Color Updated")
    return response;
}

export const updatenoteAPI=(noteId)=>{
    let response= axios.put(`https://localhost:44395/api/Notes/Update?noteId=${noteId}`,noteId,headerConfig)
    console.log("Notes Updated")
    return response;
}
