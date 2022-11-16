import React from 'react'
import "../header/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';

function Header() {

    return (
        <div className='header-box'>
            <div className='inner-header'>
                <div className='main-menu'>
                    <Tooltip title='Main-menu'>
                        <IconButton size='large'><MenuIcon size='large'/></IconButton>
                    </Tooltip>
                </div>
                <div className='keeplogo'>
                    <img className='keepimg' src='./assets/keep.png' alt="Signup Logo"/>
                    <a className='keep-txt' href=''>Keep</a>
                </div>
                <div className='searchBar'>
                    <div className='icon-search'>
                        <Tooltip title='Search'>
                            <IconButton color="inherit"><SearchIcon size='large' /></IconButton>  
                        </Tooltip>
                    </div>
                    <div className='inner-search'><InputBase placeholder="Search" /></div>
                </div>
                <div className='empty-div'></div>

                
                <div className='five-icons'>
                    <div className='ref-set-icon'>
                        <Tooltip title='Refresh'>
                            <IconButton color="inherit"><RefreshIcon size='large' /></IconButton> 
                        </Tooltip>
                        <Tooltip title='List view'>
                            <IconButton color="inherit"><ViewAgendaOutlinedIcon size='large'/></IconButton>
                        </Tooltip> 
                        <Tooltip title='Settings'>
                            <IconButton color="inherit"><SettingsIcon size='large'/> </IconButton> 
                        </Tooltip>                 
                    </div>
                    <div className='app-acc-icon'>
                        <Tooltip title='Fundoo apps'>
                            <IconButton color="inherit"><AppsIcon size='large'/></IconButton>
                        </Tooltip>
                        <Tooltip title='Google Account'>
                            <IconButton color="inherit"><AccountCircleRoundedIcon size='large'/></IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Header;