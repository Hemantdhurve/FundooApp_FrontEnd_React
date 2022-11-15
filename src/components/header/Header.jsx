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

function Header() {

    return (

        <div className='header-box'>
            <div className='inner-header'>
                <div className='main-menu'>
                    <Button  variant="text" color="inherit"><MenuIcon /></Button>   
                </div>
                <div className='keeplogo'>
                    <img className='keepimg' src='./assets/keep.png' alt="Signup Logo"/>
                    <a className='keep-txt' href=''>Keep</a>
                 </div>
                 <div className='searchBar'>
                    <div className='icon-search'><SearchIcon fontSize="medium" color="action" /></div>
                    <div className='inner-search'><InputBase placeholder="Search" /></div>
                 </div>
                 <div className='five-icons'>
                    <div className='ref-set-icon'>
                        <Button variant="text" color="inherit" size="small"><RefreshIcon size="small" /></Button> 
                        <Button variant="text" color="inherit"><ViewAgendaOutlinedIcon /></Button> 
                        <Button variant="text" color="inherit"><SettingsIcon /> </Button>                  
                    </div>
                    <div className='app-acc-icon'>
                        <Button color="inherit"><AppsIcon /></Button>
                        <Button variant="text" color="inherit"><AccountCircleRoundedIcon /></Button>
                    </div>
                 </div>
                
            </div>
        </div >
    )
}
export default Header;