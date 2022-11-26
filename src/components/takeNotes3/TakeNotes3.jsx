import React, { useState } from 'react'
import './TakeNotes3.css';
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deletenoteAPI, getArchievenoteAPI, updatenoteAPI } from '../../services/Dataservice';
import ColorPopper from '../colorPopper/ColorPopper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

function TakeNotes3(props) {
      //For the Popup modal
      const style = {
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 650,
            bgcolor: 'background.paper',
            border: 'none',
            boxShadow: 30,
            outline:'none',
            // p: 7.5,
            borderRadius: 2,
            flexWrap: 'wrap',
      };

      const [open, setOpen] = React.useState(false);
      const [modstate, setModState] = useState({
            noteId: '',
            title: '',
            description: '',
            backgroundcolor:''
      })
      const handleOpen = (modalobj) => {
            setOpen(true);
            console.log(modalobj)
            setModState({
                  noteId: modalobj.noteId,
                  title: modalobj.title,
                  description: modalobj.description,
                  backgroundcolor:modalobj.backgroundcolor
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
      const closebtn = (modId) => {
            console.log(modId)
            setOpen(false)
            updatenoteAPI(modId,modstate)
                  .then((response) => console.log(response))
                  .catch((error) => console.log(error))
            console.log("updated note")
      }


      return (
            <div>
                  <div className='full-box3' style={{ backgroundColor: props.note.backgroundcolor }}>
                        <div className='title-dec-pin'>
                              <div className="titlebox3" >
                                    <span className='note-title' onClick={() => handleOpen(props.note)}>{props.note.title}</span>
                                    <span className='note-desc' onClick={() => handleOpen(props.note)}>{props.note.description}</span>
                              </div>
                              <div className='pintk3'>
                                    <Tooltip title='Pin note'>
                                          <IconButton size='small' ><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                              </div>
                        </div>
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
                              <Tooltip >
                                    <IconButton size='small'><ColorPopper action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton>
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

                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"                  >
                        <Box sx={style}>
                              <div style={{ backgroundColor: props.note.backgroundcolor,borderRadius:5 }}>
                                    <div className='ttl-des-pin' >
                                          <div className='inp-div'>
                                                <InputBase className='note-titlemod' defaultValue={modstate.title} onChange={takeTitle} />
                                                <InputBase className='note-descmod' type='text' defaultValue={modstate.description} onChange={takeDescription} />
                                          </div>
                                          <div className='pin-btnmod'>
                                                <Tooltip title='Pin note'>
                                                      <IconButton size='small'><PushPinOutlinedIcon /></IconButton>
                                                </Tooltip>
                                          </div>
                                    </div>
                                    <div className='all-icon'>
                                          <div className='group-btnmod'>
                                                <Tooltip title='Remind me'>
                                                      <IconButton size='small'><AddAlertOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Collaborator'>
                                                      <IconButton size='small'><PersonAddAltOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Background options' >
                                                      <IconButton size='small'><ColorLensOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Add image'>
                                                      <IconButton size='small'><InsertPhotoOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Archive' >
                                                      <IconButton size='small'><ArchiveOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='More'>
                                                      <IconButton size='small'><MoreVertOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Undo'>
                                                      <IconButton size='small'><UndoOutlinedIcon /></IconButton>
                                                </Tooltip>
                                                <Tooltip title='Redo'>
                                                      <IconButton size='small'><RedoOutlinedIcon /></IconButton>
                                                </Tooltip>
                                          </div>
                                          <div className='close-btnmod'>
                                                <Button onClick={() => closebtn(modstate.noteId)} variant="text" color='inherit'>Close </Button>
                                          </div>
                                    </div>
                              </div>
                        </Box>
                  </Modal>
            </div>
      )
}

export default TakeNotes3;