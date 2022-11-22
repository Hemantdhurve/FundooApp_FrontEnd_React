import React, { useState } from 'react'
import './TakeNotes3.css';
// import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deletenoteAPI, getArchievenoteAPI, updatenoteAPI } from '../../services/Dataservice';
import ColorPopper from '../colorPopper/ColorPopper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

function TakeNotes3(props) {
      //For the Popup modal
      const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
      };

      const [open, setOpen] = React.useState(false);
      const [modstate,setModState]=useState({
            noteId:'', 
            title:'',
            description:''
      })
      const handleOpen = (modalobj) => {
            setOpen(true);
            console.log(modalobj)
            setModState({
                  noteId:modalobj.noteId,
                  title:modalobj.title,
                  description:modalobj.description
            })

      }
      const handleClose = () => setOpen(false);

      const updateArchieve = (id) => {
            getArchievenoteAPI(id)
                  .then((response) => console.log(response))
                  .catch((error) => console.log(error))
            console.log('Archieve Successful')
      }


      const deleteNote = (id) => {
            deletenoteAPI(id)
                  .then((response) => console.log(response))
                  .catch((error) => console.log(error))
            console.log("Deletion Successful")
      }

      const updateColor = () => {
            props.autoRefresh()
      }
      const takeTitle = (event) => {
            setModState(prevState => ({ ...prevState, title: event.target.value }))
      }
      const takeDescription = (event) => {
            setModState(prevState => ({ ...prevState, description: event.target.value }))
      }
      const closebtn=(modId)=>{
            console.log(modId)
            setOpen(false)
            updatenoteAPI(modId)
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error))
            console.log("updated note")
      }
      

      return (
            <div>
                  <div className='note3-box'>
                        <div className='inner-box3' style={{ backgroundColor: props.note.backgroundcolor }}>
                              <div className="titlebox3" >
                                    {/* <InputBase className='note-txt3' placeholder="Title" /> */}
                                    <span className='note-txt3' onClick={()=>handleOpen(props.note)}>{props.note.title}</span>
                                    <Tooltip title='Pin note'>
                                          <IconButton size='small' className='pin-btn'><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                              </div>
                              <div className='description3'>
                                    {/* <InputBase className='note-txt3' placeholder="Take a note..." /> */}
                                    <span className='note-txt3'>{props.note.description}</span>
                              </div>
                              {/* 
              {/* <InputBase className='note-txt3' placeholder="Take a note..." /> */}

                              <div className='logo-container3'>
                                    <Tooltip title='Remind me'>
                                          <IconButton size='small'><AddAlertOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    {/* <Tooltip title='Collaborator'>
                        <IconButton size='small'><PersonAddAltOutlinedIcon /></IconButton>
                  </Tooltip> */}
                                    <Tooltip title='Delete' onClick={() => deleteNote(props.note.noteId)} >
                                          <IconButton size='small' ><DeleteOutlineOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Background options'>
                                          <IconButton size='small'><ColorPopper action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton>
                                          {/* <ColorPopper action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton> */}
                                    </Tooltip>
                                    <Tooltip title='Add image'>
                                          <IconButton size='small'><InsertPhotoOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Archive' onClick={() => updateArchieve(props.note.noteId)}>
                                          <IconButton size='small'><ArchiveOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='More'>
                                          <IconButton size='small'><MoreVertOutlinedIcon /></IconButton>
                                    </Tooltip>

                              </div>
                        </div>
                  </div>

                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                  >
                        <Box sx={style}>
                              <div style={{backgroundColor:props.note.backgroundcolor}}>
                              
                              <InputBase className='note-txt2' defaultValue={modstate.title} onChange={takeTitle}  />

                              <InputBase className='note-txt2' type='text' defaultValue={modstate.description} onChange={takeDescription} />
                              <Button onClick={()=>closebtn(modstate.noteId)}>Close </Button>
                              </div>
                        </Box>
                  </Modal>
            </div>
      )
}

export default TakeNotes3;