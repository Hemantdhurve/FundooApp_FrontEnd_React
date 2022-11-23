import React, { useState } from 'react'
import './TakeNotes2.css';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { createNoteAPI } from '../../services/Dataservice'
import ColorPopper from '../colorPopper/ColorPopper';

function TakeNotes2(props) {
      const [createNote, setCreateNote] = useState({
            title: '',
            description: '',
            archieve:false,
            backgroundcolor:'',
            archieve: false, 
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
      }

      const noteColor=(bgColor)=>{
            setCreateNote(prevState=> ({...prevState, backgroundcolor: bgColor}))
      }

      const closeButton = () => {
             //to get back to take note 1 when pressing close button onClick
            props.closeTakeNote2()
            console.log("created note", createNote)

            createNoteAPI(createNote)
                  .then((response) => {
                        console.log(response)

                  })
                  .catch((error) => { console.log(error) })
            console.log('Notes Created')
      } 
     
      return (
            <div>
                  <div className='note2-box' >
                        <div className='inner-box' style={{backgroundColor:createNote.backgroundcolor}}>
                              <div className="titlebox1">
                                    <input className='note-txt2' placeholder="Title" onChange={takeTitle} />
                                    <Tooltip title='Pin note'>
                                          <IconButton size='large'><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                              </div>
                              <div className='description'>
                                    <input className='note-txt2' placeholder="Take a note..." onChange={takeDescription} />
                              </div>
                              <div className='logo-container'>
                                    <div className='logo-note2'>
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
                                    </div>
                                    <div>
                                          <Button variant="text" color='inherit' onClick={closeButton} >Close</Button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default TakeNotes2;