import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import TakeNotes2 from '../../components/takeNotes2/TakeNotes2'
import TakeNotes1 from '../../components/takeNotes1/TakeNotes1'
import { getAllNoteAPI } from '../../services/Dataservice'
import TakeNotes3 from '../../components/takeNotes3/TakeNotes3'


function Dashboard() {
    const [toggle, setToggle]= useState(false)
    const [notesArray,setNotesArray]= useState([])
  
    const openTakeNote2=()=>{
        setToggle(true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }
     const getNote=()=>{
        getAllNoteAPI()
        .then((response)=>{console.log(response)
            setNotesArray(response.data.data)
        })
        .catch((error)=>{console.log(error)})
        console.log('Notes List ')
     }
     const autoRefresh=()=>{
        getNote()
     }

    useEffect(()=>{
        getNote()       
    },[])

  
    return (
    <div>
        <Header />
        <div>
            {
                toggle ? <TakeNotes2 closeTakeNote2={closeTakeNote2} /> : <TakeNotes1 openTakeNote2={openTakeNote2} />
            }
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'70vw',position:'relative',left:'200px'}}>
                {
                    notesArray.map((note)=>(<TakeNotes3 note={note} autoRefresh={autoRefresh} />))
                }
            </div>
        </div>

    </div>
  )
}

export default Dashboard;