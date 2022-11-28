import React from 'react'
import "../header/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';

function Header(props) {

    const menuOpen=()=>{
        props.headerPart()
    }

    return (
        <div className='header-box'>
            <div className='inner-header'>
                <div className='main-menu'>
                    <Tooltip title='Main-menu'>
                        <IconButton size='large' onClick={menuOpen}><MenuIcon size='large' /></IconButton>
                    </Tooltip>
                </div>
                <div className='keeplogo'>
                    <img className='keepimg' src='./assets/keep.png' />
                    <a className='keep-txt' href=''>{props.label}</a>
                </div>
                <div className='searchBar'>
                    <div className='icon-search'>
                        <Tooltip title='Search'>
                            <IconButton color="inherit"><SearchIcon size='large' /></IconButton>  
                        </Tooltip>
                    </div>
                    <input className='inner-search' placeholder='Search' />
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

const mapStateToProps=(state)=>{
 return { label:state.drawerReducer.label}   
}
export default connect(mapStateToProps)(Header)