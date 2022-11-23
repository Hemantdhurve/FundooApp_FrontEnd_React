import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth, marginTop: '9.5vh',
  boxShadow: '0px 0px 5px grey',borderTop:'0px solid white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  border:'0px solid white',marginTop: '9.5vh',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(2)} + 0px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={props.headerState}>

        <List>
          <ListItem disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <LightbulbOutlinedIcon />
              </IconButton>
              <ListItemText primary="Notes" style={{borderRadius:5}} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <NotificationsOutlinedIcon />
              </IconButton>
              <ListItemText primary="Remainder" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <EditOutlinedIcon />
              </IconButton>
              <ListItemText primary="Edit Labels" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: 'block',borderRadius:'0px 25px 25px 0px'}}>
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
export default Drawer1;