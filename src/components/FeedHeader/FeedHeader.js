import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Avatar,
} from '@material-ui/core';
import Ellipse1 from '../../assets/Ellipse1.png';
import styles from './FeedHeader.module.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function FeedHeader() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar className={styles.app__bar}>
      <Toolbar className={styles.tool__bar}>
        <div className={styles.image__div}>
          <img src={Ellipse1}></img>
        </div>

        <div className={styles.left__navbar}>
          <div className={styles.header__menu}>
            <div className={styles.menu__btn}>Community</div>
            <div className={styles.menu__btn}>Career</div>
            <div className={styles.menu__btn}>Content</div>
            <div className={styles.menu__btn}>Compete</div>
          </div>
          <div className={styles.divider__line}></div>
          <div className={styles.profile__container}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Button
              className={styles.profile__btn}
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <Avatar className={styles.profile__avatar} />
              <p className={styles.profile__name}>Me</p>
            </Button>
            <Popper className={styles.popper}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <div className={styles.profile__menu}>Navjot Singh</div>
                        <MenuItem onClick={handleClose}>View Profile</MenuItem>
                        <MenuItem onClick={handleClose}>
                          Settings & Privacy
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Help</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>

        {/* <Box
          display="flex"
          justifyContent="space-between"
          marginLeft="6rem"
          height="100%"
        >
          <Box className="header_buttons" component="div">
            <Box
              className="btn__head"
              color="inherit"
              style={{ color: 'black' }}
            >
              Comunity
            </Box>
            <Box
              className="btn__head"
              color="inherit"
              style={{ color: 'black' }}
            >
              Career
            </Box>
            <Box
              className="btn__head"
              color="inherit"
              style={{ color: 'black' }}
            >
              Content
            </Box>
            <Box
              className="btn__head"
              color="inherit"
              style={{ color: 'black' }}
            >
              Compete
            </Box>
          </Box>

          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton>
              <NotificationsIcon />
            </IconButton>

            <Button className="profile__btn">
              <Avatar className="profile__avatar" fontSize="10px" />
              <p className="profile__name">Me</p>
            </Button>
          </Box>
        </Box> */}
      </Toolbar>
      <Box component="div"></Box>
    </AppBar>
  );
}
