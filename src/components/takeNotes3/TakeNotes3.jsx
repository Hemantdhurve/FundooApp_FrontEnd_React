import React from 'react'
import './TakeNotes3.css';
import InputBase from '@mui/material/InputBase';
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';

function TakeNotes2() {
  return (
    <div>
        <div  className='note3-box'>
          <div className='inner-box3'>
            <div className="titlebox3">
                {/* <InputBase className='note-txt3' placeholder="Title" /> */}
                <Tooltip title='Pin note'>
                    <IconButton size='small'><PushPinOutlinedIcon /></IconButton>
                </Tooltip>
            </div>
            {/* <div className='description3'>
              <InputBase className='note-txt3' placeholder="Take a note..." />
            </div> */}
            <div className='logo-container3'>
                  <Tooltip title='Remind me'>
                        <IconButton size='small'><AddAlertOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Collaborator'>
                        <IconButton size='small'><PersonAddAltOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Background options'>
                        <IconButton size='small'><ColorLensOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Add image'>
                        <IconButton size='small'><InsertPhotoOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Archive'>
                        <IconButton size='small'><ArchiveOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='More'>
                        <IconButton size='small'><MoreVertOutlinedIcon /></IconButton>
                  </Tooltip>
            </div>
          </div>
        </div>
    </div> 
  )
}

export default TakeNotes2;