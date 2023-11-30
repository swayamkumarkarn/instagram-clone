import React from 'react';
import './NavBar.css';
import { Avatar, Grid } from '@mui/material';
import insta_log from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import dp from '../../images/dp6.png';

const NavBar = () => {
  return (
    <div>
      <div className="navbar__barContent">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <img className="navbar_logo" src={insta_log} width="105px" alt="Instagram Logo" />
          </Grid>
          <Grid item xs={3}>
            <input type="text" className="navbar__searchBar" placeholder="Search" />
          </Grid>
          <Grid item xs={3} style={{ display: 'flex' }}>
            <img className="navbar__img" src={home} width="25px" alt="Home" />
            <img className="navbar__img" src={message} width="25px" alt="Messages" />
            <img className="navbar__img" src={find} width="25px" alt="Find" />
            <img className="navbar__img" src={react} width="25px" alt="React" />
            <Avatar src={dp} className="navbar__img" style={{ maxWidth: '25px', maxHeight: '25px' }} alt="Avatar" />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NavBar;
