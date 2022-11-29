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
    borderColor: 'black',
    height: '40%',
    marginTop: '-30px',
    justifyContent: 'center',
  },

  innerNotebox: {
    display: 'flex',
    flexDirection: 'row',
    width: '44vw',
    border: '1px solid rgb(199, 194, 194)', 
    boxShadow: '1px 1px 5px rgba(0,0,0,0.6)',
    borderRadius: '8px',
    alignItems: 'center',
  },

  noteTxt: {
    width: '75%',
    paddingLeft: '10px',
    color: 'rgb(187, 185, 185)',
  },

  btn:{
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    marginLeft: '56%',
    position: 'relative',
  },
  // ['']:{}

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
          <Typography className={classes.noteTxt} >Take a Note...</Typography>
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