import React from 'react';
import './TakeNotes1.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Tooltip, Typography } from '@mui/material';

function TakeNotes1(props) {

  //to open take note 2 when pressing close button onClick
  const openNote=()=>{
    props.openTakeNote2()
  }
  return (
    <div >
      <div className='note-box' >
        <div className="inner-notebox" onClick={openNote}>
          <Typography className='note-txt' >Take a Note...</Typography> 
          <div className='btn'>
            <Tooltip title='New List'>
              <IconButton size='large'><CheckBoxOutlinedIcon /></IconButton>
            </Tooltip>
            <Tooltip title='New note with drawing'>
              <IconButton size='large'><BrushIcon /></IconButton>
            </Tooltip>
            <Tooltip title='New note with image'>
              <IconButton size='large'><ImageOutlinedIcon /></IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeNotes1;