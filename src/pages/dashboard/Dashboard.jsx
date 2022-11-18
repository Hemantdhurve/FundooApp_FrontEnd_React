import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import TakeNotes2 from '../../components/takeNotes2/TakeNotes2'
import TakeNotes1 from '../../components/takeNotes1/TakeNotes1'
import { getAllNoteAPI } from '../../services/Dataservice'


function Dashboard() {
    const [toggle, setToggle]= useState(false)
  
    const openTakeNote2=()=>{
        setToggle(true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }

    // useEffect(()=>{
    //     getAllNoteAPI()
    //     .then((response)=>{console.log(response)
          
    //     })
    //     .catch((error)=>{console.log(error)})
    //     console.log('Notes List ')
    // },[])
  
    return (
    <div>
        <Header />
        <div>
            {
                toggle ? <TakeNotes2 closeTakeNote2={closeTakeNote2} /> : <TakeNotes1 openTakeNote2={openTakeNote2} />
            }
        </div>

    </div>
  )
}

export default Dashboard;