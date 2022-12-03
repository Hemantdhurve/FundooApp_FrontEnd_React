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

const useStyle = makeStyles({
      fullBox3: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '23vh',
            boxSizing: 'border-box',
            //when changing width here also change in dashboard 
            width: '17vw',
            borderRadius: '8px',
            marginBottom: '15px',
            marginRight:'15px',
      },
      titleDecPin: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
      },
      titleBox3: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxSizing: 'border-box',
            height: '16vh',
            width: '100%',
            rowGap: '8px',
      },
      pinTk3: {
            position: 'relative',
            marginTop: '10px',
      },
      noteTitle: {
            display: 'flex',
            position: 'relative',
            width: '95%',
            top: '10px',
            left: '10px',
            fontSize: 'large',
            fontWeight: '400',
      },

      logoContainer3: {
            display: 'flex',
            flexDirection: 'row',
            position: 'realative',
            boxSizing: 'border-box',
            width: '100%',
            justifyContent: 'space-between',
      },

      //Css For Modal
      modBox: {
            position: 'relative',
            top: '25vh',
            left: '25vw',
            width: '48vw',
            backgroundColor: 'white',
            boxShadow: 30,
            outline: 'none',
            // p: 7.5,
            borderRadius: 8,
            flexWrap: 'wrap',
      },

      ttlDesPin: {
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            height: '18vh',
      },
      inpDiv: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '15vh',
            top: '10px',
            width: '93%',
            left: '10px',
            rowGap: '15px',
      },
      pinBtnmod: {
            position: 'relative',
            top: '10px',
      },

      allIcon: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      },
      groupBtnmod: {
            display: 'flex',
            position: 'relative',
            left: '5px',
            width: '65%',
            bottom: '5px',
            justifyContent: 'space-between',
      },
      closeBtnmod: {
            position: 'relative',
            right: '15px',
            bottom: '5px',
      },

      ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
            fullBox3: {
                  width: '82vw',
            },
            logoContainer3: {
                  width: '70%',
            },

            //modal css
            modBox: {
                  position: 'relative',
                  top: '25vh',
                  left: '0vw',
                  width: '100%',
            }, 
            ttlDesPin: {
                  height:'20vh'
            },
            closeBtnmod: {
                  left:'8px',
            },

      },
      ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
            fullBox3: {
                  width: '40.5vw',
            },
            logoContainer3: {
                  width: '100%',
            },
            //modal css
            modBox: {
                  position: 'relative',
                  top: '25vh',
                  left: '10vw',
                  width: '80%',
            }, 
            ttlDesPin: {
                  height:'20vh'
            },

      },
      ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
            fullBox3: {
                  width: '27vw',
            },
            logoContainer3: {
                  width: '100%',
            },
             //modal css
             modBox: {
                  position: 'relative',
                  left: '20vw',
                  width: '60%',
            }, 
            ttlDesPin: {
                  height:'20vh'
            },
      },

})

function TakeNotes3(props) {
      const classes = useStyle()

      //For the Popup modal
      // const modBox = {
      //       position: 'absolute',
      //       top: '35%',
      //       left: '50%',
      //       transform: 'translate(-50%, -50%)',
      //       width: 650,
      //       bgcolor: 'background.paper',
      //       boxShadow: 30,
      //       outline:'none',
      //       // p: 7.5,
      //       borderRadius: 2,
      //       flexWrap: 'wrap',
      // };

      const [open, setOpen] = React.useState(false);
      const [modstate, setModState] = useState({
            noteId: '',
            title: '',
            description: '',
            backgroundcolor: ''
      })
      const handleOpen = (modalobj) => {
            setOpen(true);
            console.log(modalobj)
            setModState({
                  noteId: modalobj.noteId,
                  title: modalobj.title,
                  description: modalobj.description,
                  backgroundcolor: modalobj.backgroundcolor
            })

      }
      const handleClose = () => setOpen(false);

      const updateArchieve = (id) => {
            getArchievenoteAPI(id)
                  .then((response) => {console.log(response)
                        props.autoRefresh()
                  })                    
                  .catch((error) => console.log(error))
            console.log('Archieve Successful')
      }


      const deleteNote = (id) => {
            deletenoteAPI(id)
                  .then((response) => {console.log(response)
                        props.autoRefresh()
                  })                    
                  
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
            updatenoteAPI(modId, modstate)
                  .then((response) => {console.log(response)
                        props.autoRefresh()
                  })                    
                  .catch((error) => console.log(error))
            console.log("updated note")
      }


      return (
            <Box>
                  <Paper className={classes.fullBox3} elevation={4} style={{ backgroundColor: props.note.backgroundcolor, borderRadius: 8 }}>
                        <Box className={classes.titleDecPin}>
                              <Box className={classes.titleBox3} onClick={() => handleOpen(props.note)}>
                                    <span className={classes.noteTitle} onClick={() => handleOpen(props.note)}>{props.note.title}</span>
                                    <span className={classes.noteTitle} onClick={() => handleOpen(props.note)}>{props.note.description}</span>
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
                        <Box className={classes.modBox}>
                              <Box style={{ backgroundColor: props.note.backgroundcolor, borderRadius: 8 }}>
                                    <Box className={classes.ttlDesPin} >
                                          <Box className={classes.inpDiv}>
                                                <InputBase defaultValue={modstate.title} onChange={takeTitle} />
                                                <InputBase defaultValue={modstate.description} onChange={takeDescription} />
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