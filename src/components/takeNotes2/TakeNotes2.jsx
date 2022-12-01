import React, { useState } from 'react'
import './TakeNotes2.css';
import { Tooltip, InputBase } from '@mui/material';
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
      // note2Box: {
      //       display: 'flex',
      //       flexDirection: 'row',
      //       position:'relative',
      //       boxSizing:'border-box',
      //       width:'45vw',
      //       left:'28vw',
      //       height: '22vh',
      //       marginTop: '-30px',
      //       marginTop: '30px',
      //       alignItems:'centre',
      // },
      mainBox: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: '45vw',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            alignItems:'center',
            boxSizing: 'border-box',
            left: '400px',
            height: '21vh',
            top:'5vh', 
      },
      titleBox1: {
            display: 'flex',
            flexDirection: 'row',
            height:'80%',           
            justifyContent: 'space-between',
            width:'100%',
            
      },
      txt2:{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            height: '33%',
            top: '10px',
            width: '100%',
            rowGap:'12px',
      },
      noteTxt2: {
            left: '10px',
            position: 'relative',
            width: '98%',
            fontSize: 'medium',           
      },

      logoContainer: {
            display: 'flex',
            flexDirection:'row',
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            boxSizing:'border-box',
      },
      eightIcons:{
            display:'flex',
            width:'70%',
            justifyContent:'space-between',
            boxSizing:'border-box',
      },

      closeBtn:{
            position:'relative',
            right:'20px',
            boxSizing:'border-box',
      },

      ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
            mainBox: {
                  width: '82vw',
                  left:'60px',
                  height:'150px',
            },
            logoContainer: {
                  display:'flex',
                  position:'relative',
                  flexDirection:'column',
                  alignItems:'flex-end',
            },
           
            eightIcons:{
                  display:'flex',
                  width:'100%',
                  justifyContent: 'flex-start',
            },
      
            // closeBtn:{
            //       display:'flex',
            //       justifyContent: 'flex-end',
            //       position:'relative',
            // },
      },
      ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
            mainBox: {
                  width: '87vw',
                  left:'80px',
                  height:'150px',
            },
            logoContainer: {
                  display:'flex',
                  alignItems:'flex-start',
            },
      },
      ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
            mainBox: {
                  width: '85vw',
                  left:'90px',
                  height:'150px',
            },           
      },
})

function TakeNotes2(props) {

      const classes = useStyle()
      const [createNote, setCreateNote] = useState({
            title: '',
            description: '',
            archieve: false,
            backgroundcolor: '',
            trash: false,
            pin: false

      })
      const takeTitle = (event) => {
            setCreateNote(prevState => ({ ...prevState, title: event.target.value }))
      }
      const takeDescription = (event) => {
            setCreateNote(prevState => ({ ...prevState, description: event.target.value }))
      }
      const noteArchieve = () => {
            setCreateNote(prevState => ({ ...prevState, archieve: true }))
            console.log("Archieve on TakeNote2 successful")
      }

      const noteColor = (bgColor) => {
            setCreateNote(prevState => ({ ...prevState, backgroundcolor: bgColor }))
      }

      const closeButton = () => {
            //to get back to take note 1 when pressing close button onClick
            props.closeTakeNote2()
            console.log("created note", createNote)

            createNoteAPI(createNote)
                  .then((response) => { console.log(response) })
                  .catch((error) => { console.log(error) })
            console.log('Notes Created')
      }

      return (
            <Box>
                  <Card className={classes.mainBox} style={{ backgroundColor: createNote.backgroundcolor }} elevation={3}>
                        <Box className={classes.titleBox1} >
                               <Box className={classes.txt2}>
                                     <InputBase className={classes.noteTxt2}  placeholder="Title" onChange={takeTitle} />
                                     <InputBase className={classes.noteTxt2}  placeholder="Take a note..." onChange={takeDescription} />
                               </Box> 
                               <Box>
                                    <Tooltip title='Pin note' style={{padding:'10px'}}>
                                          <IconButton size='small'><PushPinOutlinedIcon /></IconButton>
                                    </Tooltip>
                               </Box>                              
                        </Box>
                       
                        <Box className={classes.logoContainer}>
                              <Box className={classes.eightIcons}>
                                    <Tooltip title='Remind me'>
                                          <IconButton size='small'><AddAlertOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Collaborator'>
                                          <IconButton size='small'><PersonAddAltOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Background options' >
                                          <IconButton size='small'><ColorPopper action="create" noteColor={noteColor} /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Add image'>
                                          <IconButton size='small'><InsertPhotoOutlinedIcon /></IconButton>
                                    </Tooltip>
                                    <Tooltip title='Archive' onClick={noteArchieve}>
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
                              <Box className={classes.closeBtn}>
                                    <Button variant="text" color='inherit' onClick={closeButton} >Close</Button>
                              </Box>
                        </Box>
                  </Card>
            </Box>
      )
}

export default TakeNotes2;