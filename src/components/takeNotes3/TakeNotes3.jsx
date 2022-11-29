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
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyle=makeStyles({
      fullBox3:{
            display: 'flex',
            flexDirection: 'column',
            height: '22vh',
            marginTop: '30px',
            width: '18vw',
            marginRight: '30px',    
            borderRadius: '8px',
      },
      titleDecPin:{
            display: 'flex',
            flexDirection: 'row',
      },
      titleBox3:{
            display: 'flex',
            flexDirection: 'column',
            height: '15vh',
            width: '50vw',
            padding: '5px',
      },
      pinTk3:{
            padding: '10px',
      },
      noteTitle:{
            height: '5vh',
            paddingLeft: '10px',
            justifyContent: 'center',
            paddingTop: '10px',
            marginBottom: '10px',
            fontSize: 'large',
            fontWeight: '500',
      },
      noteDesc:{
            height: '5vh',
            paddingLeft: '10px',
            justifyContent: 'center',
            paddingTop: '10px',
            fontWeight: '500',
      },
      logoContainer3:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '4px', 
      },

      //Css For Modal
     
      ttlDesPin:{
            display: 'flex',
            flexDirection: 'row',
      },
      inpDiv:{
            display: 'flex',
            flexDirection: 'column',
            height: '16vh',
            padding: '15px 15px',
            width: '100%',
      },
      pinBtnmod:{
            paddingTop: '13px',
            paddingRight: '10px',
      },
      noteTitlemod:{
            marginBottom: '18px',
      },
      allIcon:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      },
      groupBtnmod:{
            display: 'flex',
            padding: '5px',
            width: '65%',
            justifyContent: 'space-between',  
      },
      closeBtnmod:{
            marginRight: '25px',
      },
})

function TakeNotes3(props) {
      const classes=useStyle()

      //For the Popup modal
      const style = {
            position: 'absolute',
            top: '35%',
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
            <Box>
                  <Paper className={classes.fullBox3} elevation={4} style={{ backgroundColor: props.note.backgroundcolor,borderRadius:8 }}>
                        <Box className={classes.titleDecPin}>
                              <Box className={classes.titleBox3} >
                                    <span className={classes.noteTitle} onClick={() => handleOpen(props.note)}>{props.note.title}</span>
                                    <span className={classes.noteDesc} onClick={() => handleOpen(props.note)}>{props.note.description}</span>
                              </Box>
                              <Box className={classes.pinTk3}>
                                    <Tooltip title='Pin note'>
                                          <IconButton size='small' ><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                              </Box>
                        </Box>
                        <Box className={classes.logoContainer3}>
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
                        </Box>
                  </Paper>

                  <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"                  >
                        <Box sx={style}>
                              <Box style={{ backgroundColor: props.note.backgroundcolor,borderRadius:8 }}>
                                    <Box className={classes.ttlDesPin} >
                                          <Box className={classes.inpDiv}>
                                                <InputBase className={classes.noteTitlemod} defaultValue={modstate.title} onChange={takeTitle} />
                                                <InputBase type='text' defaultValue={modstate.description} onChange={takeDescription} />
                                          </Box>
                                          <Box className={classes.pinBtnmod}>
                                                <Tooltip title='Pin note'>
                                                      <IconButton size='small'><PushPinOutlinedIcon /></IconButton>
                                                </Tooltip>
                                          </Box>
                                    </Box>
                                    <Box className={classes.allIcon}>
                                          <Box className={classes.groupBtnmod}>
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
                                          </Box>
                                          <Box className={classes.closeBtnmod}>
                                                <Button onClick={() => closebtn(modstate.noteId)} variant="text" color='inherit'>Close </Button>
                                          </Box>
                                    </Box>
                              </Box>
                        </Box>
                  </Modal>
            </Box>
      )
}

export default TakeNotes3;