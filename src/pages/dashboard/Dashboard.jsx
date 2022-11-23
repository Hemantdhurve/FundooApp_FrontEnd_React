import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import TakeNotes2 from '../../components/takeNotes2/TakeNotes2'
import TakeNotes1 from '../../components/takeNotes1/TakeNotes1'
import { getAllNoteAPI } from '../../services/Dataservice'
import TakeNotes3 from '../../components/takeNotes3/TakeNotes3'
import Drawer1 from '../../components/drawer/drawer1'


function Dashboard() {
    const [toggle, setToggle]= useState(false)
    const [notesArray,setNotesArray]= useState([])
    const [headerState,setHeaderState]=useState(false)
  
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

    const headerPart=()=>{
        setHeaderState(!headerState)
    }
  
    return (
    <div>
        <Header  headerPart={headerPart}/>
        <Drawer1 headerState={headerState}/>
        <div>
            {
                toggle ? <TakeNotes2 closeTakeNote2={closeTakeNote2} /> : <TakeNotes1 openTakeNote2={openTakeNote2} />
            }
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'70vw',position:'relative',left:'240px'}}>
                {
                    notesArray.map((note)=>(<TakeNotes3 note={note} autoRefresh={autoRefresh} />))
                }
            </div>
        </div>

    </div>
  )
}

export default Dashboard;