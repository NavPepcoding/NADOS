import { AppBar, Image, Toolbar, Button } from '@material-ui/core';
import React from 'react';
import Ellipse1 from '../../assets/Ellipse1.png';
import styles from './LoginSignUpHeader.module.css';
function LoginSignUpHeader() {
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default LoginSignUpHeader;
