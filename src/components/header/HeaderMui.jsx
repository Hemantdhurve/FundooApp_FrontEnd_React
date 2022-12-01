import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { connect } from 'react-redux';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:8,height:50,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),boxShadow: '1px 1px 5px grey',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit', alignItems: 'center',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

function HeaderMui(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuOpen=()=>{
        props.headerPart()
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <RefreshIcon />
                    </Badge>
                </IconButton>
                <p>Refresh</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge color="error">
                        <ViewAgendaOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>List View</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge >
                        <SettingsIcon />
                    </Badge>
                </IconButton>
                <p>Setting</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <AppsIcon />
                    </Badge>
                </IconButton>
                <p>Fundoo App</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1,width:'100vw'}} >
            <AppBar position="static" elevation={1} sx={{backgroundColor: '#ffffff',color:'rgb(53, 50, 50)'}}>
                <Toolbar>
                    <IconButton onClick={menuOpen}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"                        
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block',width:'12vw' } }}
                    >
                        <Box style={{ display: 'flex', flexDirection: 'row',alignItems:'center'}}>
                            <Box style={{width:'50px'}}>
                                <img src='./assets/keep.png' style={{ width: 43, height: 43, marginTop: '7px' }} />
                            </Box>
                            {props.label}
                        </Box>
                    </Typography>
                    <Search sx={{ flexGrow: 1,backgroundColor: 'rgb(240, 243, 245)'}}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ flexGrow: 1,width:'100%'}}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: {  xs: 'none', md: 'flex' }}}>
                            <Box style={{width:'14vw',display:'flex',}}>
                                <IconButton size="large">
                                    <Badge color="error">
                                        <RefreshIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    color="inherit"
                                >
                                    <Badge color="error">
                                        <ViewAgendaOutlinedIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton size="large" >
                                    <Badge  color="default">
                                        <SettingsIcon />
                                    </Badge>
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton size="large" >
                                    <Badge color="error">
                                        <AppsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                             </Box>
                        </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
const mapStateToProps=(state)=>{
    return { label:state.drawerReducer.label}   
}
export default connect(mapStateToProps)(HeaderMui);