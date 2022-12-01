import React from 'react';
import './TakeNotes1.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  noteBox: {
    display: 'flex',
    flexDirection: 'row',
    position:'relative',
    boxSizing:'border-box',
    width:'45vw',
    left:'400px',
    height: '8vh',
    top:'5vh',  

  },

  innerNotebox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        border: '1px solid #cecdcd',
        borderRadius: '8px',
},

  noteTxt: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    paddingLeft: '10px',
    color: 'rgb(187, 185, 185)',
  },

  // btn:{
  //   display: 'flex',
  //   flexDirection: 'row',
  //   width: '95%',
  //   marginLeft: '56%',
  //   position: 'relative',
  // },

 ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    noteBox: {
      width: '82vw',
      left: '60px',
    },
    innerNotebox: {
        width: '100%',
        height: '100%',
    },
    noteTxt: {
        width: '100%'
    },
  },
 ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
       noteBox: {
      width: '87vw',
      left: '70px',
    },
    innerNotebox: {
        width: '100%',
        height: '100%',
    },
    noteTxt: {
        width: '100%',
    },
  },

  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    noteBox: {
   width: '67vw',
   left: '80px',
 },
 innerNotebox: {
     width: '100%',
     height: '100%',
 },
 noteTxt: {
     width: '100%',
 },
}

})
function TakeNotes1(props) {
const classes=useStyle()

  //to open take note 2 when pressing close button onClick
  const openNote = () => {
    props.openTakeNote2()
  }
  return (
    <Box >
      <Box className={classes.noteBox} >
        <Card className={classes.innerNotebox} onClick={openNote}>
          <Box>
          <Typography className={classes.noteTxt} >Take a Note...</Typography>
          </Box>          
          <Box className={classes.btn}>
            <Tooltip title='New List'>
              <IconButton size='large'><CheckBoxOutlinedIcon /></IconButton>
            </Tooltip>
            <Tooltip title='New note with drawing'>
              <IconButton size='large'><BrushIcon /></IconButton>
            </Tooltip>
            <Tooltip title='New note with image'>
              <IconButton size='large'><ImageOutlinedIcon /></IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}

export default TakeNotes1;