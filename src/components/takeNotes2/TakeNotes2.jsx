import React, { useState } from 'react'
import './TakeNotes2.css';
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { createNoteAPI } from '../../services/Dataservice'
import ColorPopper from '../colorPopper/ColorPopper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
      note2Box: {
            display: 'flex',
            flexDirection: 'row',
            borderColor: 'black',
            width: '100%',
            marginTop: '-30px',
            justifyContent: 'center',
      },
      innerBox: {
            display: 'flex',
            flexDirection: 'column',
            width: '44vw',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.6)',
      },
      titleBox1: {
            display: 'flex',
            flexDirection: 'row',
            height: '32%',
            justifyContent: 'space-between',
            width: '43.2vw',
            
      },
      noteTxt2: {
            paddingInlineStart: '2%',
            outline: 'none',
            border: 'none',
            width: '42vw',
            fontSize: 'medium',
            height: '7vh',
            borderRadius: '8px',
      },
      description: {
            height: '45%',
            alignItems: 'center',
            paddingTop: '10px',
            boxSizing: 'border-box',
      },
      logoContainer:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', 
            alignItems: 'center',
            height: '33%',
            width: '42vw',
      },
})

function TakeNotes2(props) {

      const classes=useStyle()
      const [createNote, setCreateNote] = useState({
            title: '',
            description: '',
            archieve: false,
            backgroundcolor:'',
            trash: false, 
            pin: false

      })
      const takeTitle = (event) => {
            setCreateNote(prevState => ({ ...prevState, title: event.target.value }))
      }
      const takeDescription = (event) => {
            setCreateNote(prevState => ({ ...prevState, description: event.target.value }))
      }
      const noteArchieve=()=>{
            setCreateNote(prevState=> ({...prevState, archieve: true}))
            console.log("Archieve on TakeNote2 successful")
      }

      const noteColor=(bgColor)=>{
            setCreateNote(prevState=> ({...prevState, backgroundcolor: bgColor}))
      }

      const closeButton = () => {
             //to get back to take note 1 when pressing close button onClick
            props.closeTakeNote2()
            console.log("created note", createNote)

            createNoteAPI(createNote)
            .then((response) => {console.log(response)})
            .catch((error) => { console.log(error)})
            console.log('Notes Created')
      } 
     
      return (
            <Box>
                  <Box className={classes.note2Box}>
                        <Card className={classes.innerBox} style={{backgroundColor:createNote.backgroundcolor}} elevation={3}>
                              <Box className={classes.titleBox1} >
                                    <input className={classes.noteTxt2} style={{backgroundColor:createNote.backgroundcolor}} placeholder="Title" onChange={takeTitle} />
                                    <Tooltip title='Pin note'>
                                          <IconButton size='large'><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                              </Box>
                              <Box className={classes.description}>
                                    <input className={classes.noteTxt2} style={{backgroundColor:createNote.backgroundcolor}} placeholder="Take a note..." onChange={takeDescription} />
                              </Box>
                              <Box className={classes.logoContainer}>
                                    <Box>
                                          <Tooltip title='Remind me'>
                                                <IconButton size='large'><AddAlertOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='Collaborator'>
                                                <IconButton size='large'><PersonAddAltOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='Background options' >
                                                <IconButton size='large'><ColorPopper action="create" noteColor={noteColor} /></IconButton>
                                          </Tooltip>                                         
                                          <Tooltip title='Add image'>
                                                <IconButton size='large'><InsertPhotoOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='Archive' onClick={noteArchieve}>
                                                <IconButton size='large'><ArchiveOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='More'>
                                                <IconButton size='large'><MoreVertOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='Undo'>
                                                <IconButton size='large'><UndoOutlinedIcon /></IconButton>
                                          </Tooltip>
                                          <Tooltip title='Redo'>
                                                <IconButton size='large'><RedoOutlinedIcon /></IconButton>
                                          </Tooltip>
                                    </Box>
                                    <Box>
                                          <Button variant="text" color='inherit' onClick={closeButton} >Close</Button>
                                    </Box>
                              </Box>
                        </Card>
                  </Box>
            </Box>
      )
}

export default TakeNotes2;