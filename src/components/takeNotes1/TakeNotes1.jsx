import React from 'react';
import './TakeNotes1.css';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';

function TakeNotes1() {
  return (
    <div >
      <div className='note-box'>

        <div className="inner-notebox">
          <InputBase className='note-txt' placeholder="Take a note..." />
         
          {/* Tooltip is used to give title to the icon and
          IconButton is used instead of Button to get the rounded icon  */}

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
  )
}

export default TakeNotes1;