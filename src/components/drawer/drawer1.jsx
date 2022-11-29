import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { connect } from 'react-redux';

const drawerWidth = 260;

const openedMixin = (theme) => ({
      width: drawerWidth,
      marginTop: '10vh', 
      boxShadow: '0px 0px 5px grey',
      borderTop:'0px solid white',
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
});

const closedMixin = (theme) => ({
      border:'0px solid white',
      marginTop: '10vh',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: `calc(${theme.spacing(2)} + 0px)`,[theme.breakpoints.up('sm')]: {width: `calc(${theme.spacing(8)} + 1px)`,},
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {...openedMixin(theme),'& .MuiDrawer-paper': openedMixin(theme),}),
    ...(!open && { ...closedMixin(theme),'& .MuiDrawer-paper': closedMixin(theme),}),
  }),
);

function Drawer1(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const chooseNotes=(getValues)=>{
    props.listenDrawer(getValues)
    props.dispatch({
      type:`${getValues}`
    })
   
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.headerState}>

        <List>
          <ListItem disablePadding onClick={()=>chooseNotes('Notes')} sx={{ display: 'flex',"&:hover":{borderRadius:'0px 25px 25px 0px',backgroundColor:'#feefc3'}}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <LightbulbOutlinedIcon />
              </IconButton>
              <ListItemText primary="Notes" style={{borderRadius:5}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={()=>chooseNotes('Remainder')} sx={{ display: 'flex',"&:hover":{borderRadius:'0px 25px 25px 0px',backgroundColor:'#feefc3'}}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <NotificationsOutlinedIcon />
              </IconButton>
              <ListItemText primary="Remainder" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={()=>chooseNotes('Edit')} sx={{ display: 'flex', "&:hover":{borderRadius:'0px 25px 25px 0px',backgroundColor:'#feefc3'}}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <EditOutlinedIcon />
              </IconButton>
              <ListItemText primary="Edit Labels" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={()=>chooseNotes('Archive')} sx={{ display: 'flex',"&:hover":{borderRadius:'0px 25px 25px 0px',backgroundColor:'#feefc3'}}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding onClick={()=>chooseNotes('Bin')} sx={{ display: 'flex',"&:hover":{borderRadius:'0px 25px 25px 0px',backgroundColor:'#feefc3'}}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <DeleteOutlinedIcon />
              </IconButton>
              <ListItemText primary="Bin" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
export default connect()(Drawer1)