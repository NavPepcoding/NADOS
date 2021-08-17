import React from 'react';
import {
  AppBar,
  Image,
  Toolbar,
  Button,
  Box,
  IconButton,
  Avatar,
  Typography,
} from '@material-ui/core';
import Ellipse1 from '../../assets/Ellipse1.png';
import './FeedHeader.module.css';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function FeedHeader() {
  return (
    <AppBar className="app__bar">
      <Toolbar className="tool__bar">
        <Box component="div">
          <img className="appbar__img" src={Ellipse1}></img>
        </Box>

        <Box display='flex' justifyContent='space-between' marginLeft='6rem' height="100%">
          <Box class="header_buttons" component="div">

            <Box className='btn__head' color="inherit" style={{ color: 'black' }}>
              Comunity
            </Box>
            <Box className='btn__head' color="inherit" style={{ color: 'black' }}>
              Career
            </Box>
            <Box className='btn__head'  color="inherit" style={{ color: 'black' }}>
              Content
            </Box>
            <Box className='btn__head' color="inherit" style={{ color: 'black' }}>
              Compete
            </Box>
          </Box>

          <Box component="div" display='flex' justifyContent='space-between' alignItems='center'>
            <IconButton>
              <NotificationsIcon />
            </IconButton>

            <Button className="profile__btn">
              <Avatar className="profile__avatar" fontSize="10px" />
              <p className="profile__name">Me</p>
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box component='div'>

      </Box>
    </AppBar>
  );
}
