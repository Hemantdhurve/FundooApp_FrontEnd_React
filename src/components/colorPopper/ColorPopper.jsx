import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';


function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const createColor=(color)=>{
    props.noteColor(color)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
       
             <ColorLensOutlinedIcon onClick={handleClick}/>
        

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:'flex',flexDirection:'row' }}>
         {
            colors.map((color)=>(
                <div style={{height:25,width:25,borderRadius:50,backgroundColor:color,marginRight:5}} onClick={()=> createColor(color)}>

                </div>
            ))
         }
        </Box>
      </Popper>
    </div>
  );
}

export default ColorPopper;