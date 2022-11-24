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
    const [drawerState,setDrawerState]=useState('Notes')
  
    const openTakeNote2=()=>{
        setToggle(true)
    }
    const closeTakeNote2=()=>{
        setToggle(false)
    }
     const getNote=()=>{
        getAllNoteAPI()
        .then((response)=>{
            let filterNotes=[]
            if(drawerState==='Notes'){
                filterNotes=response.data.data.filter((notes)=>{
                    if(notes.archieve===false && notes.trash===false)
                    {
                        return notes
                    }
                })
            }
            if(drawerState==='Archive'){
                filterNotes=response.data.data.filter((notes)=>{
                    if(notes.archieve===true && notes.trash===false)
                    {
                        return notes
                    }
                })
            }
            if(drawerState==='Bin'){
                filterNotes=response.data.data.filter((notes)=>{
                    if(notes.archieve===false && notes.trash===true)
                    {
                        return notes
                    }
                })
            }
            
            console.log(response)
            setNotesArray(filterNotes)
        })
        .catch((error)=>{console.log(error)})
        console.log('Getting Notes List ')
     }
     const autoRefresh=()=>{
        getNote()
     }

    useEffect(()=>{
        getNote()       
    },[drawerState])

    const headerPart=()=>{
        setHeaderState(!headerState)
    }

    const listenDrawer=(drawobj)=>{
        setDrawerState(drawobj)
    }
  
    return (
    <div>
        <Header  headerPart={headerPart}/>
        <Drawer1 headerState={headerState} listenDrawer={listenDrawer} />
        <div>
            {
                toggle ? <TakeNotes2 closeTakeNote2={closeTakeNote2} /> : <TakeNotes1 openTakeNote2={openTakeNote2} />
            }
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'70vw',position:'relative',left:'270px'}}>
                {
                    notesArray.map((note)=>(<TakeNotes3 note={note} autoRefresh={autoRefresh} />))
                }
            </div>
        </div>

    </div>
  )
}

export default Dashboard;