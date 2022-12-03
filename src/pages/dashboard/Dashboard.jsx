import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import TakeNotes2 from '../../components/takeNotes2/TakeNotes2'
import TakeNotes1 from '../../components/takeNotes1/TakeNotes1'
import { getAllNoteAPI } from '../../services/Dataservice'
import TakeNotes3 from '../../components/takeNotes3/TakeNotes3'
import Drawer1 from '../../components/drawer/drawer1'
import HeaderMui from '../../components/header/HeaderMui'
import { makeStyles } from '@mui/styles'

const useStyle=makeStyles({
    tk3Dash:{
        display: 'flex',
        boxSizing:'border-box',
        position:'relative',
        left: '280px',
        width: '75vw',
        top:'10vh',
        flexWrap: 'wrap',      
    },

    ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
         tk3Dash:{
            left: '60px',
            width: '82vw',
        }
    },
    ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
        tk3Dash:{
            display:'flex',
            left: '72px',
            width: '87vw',
        }
    },
    ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
     tk3Dash:{
            display:'flex',
            left: '72px',
            width: '87vw',
        }
    },

})
function Dashboard() {
    const classes=useStyle()
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
    const autoRefresh=()=>{
        getNote()
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
        {/* <Header headerPart={headerPart}/> */}
        <HeaderMui headerPart={headerPart}/>

        <Drawer1 headerState={headerState} listenDrawer={listenDrawer} />
        <div>
            {
                toggle ? <TakeNotes2 autoRefresh={autoRefresh} closeTakeNote2={closeTakeNote2} /> : <TakeNotes1 openTakeNote2={openTakeNote2} />
            }
            <div className={classes.tk3Dash}>
                {
                    notesArray.map((note)=>(<TakeNotes3 note={note} autoRefresh={autoRefresh} />))
                }
            </div>
        </div>

    </div>
  )
}

export default Dashboard;