import React from 'react';
import styles from './LeftSideBar.module.css';
import { Card, Button, CardContent, Box } from '@material-ui/core';
import SideBarBtn from '../SideBarBtn/SideBarBtn';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleIcon from '@material-ui/icons/People';
import VideocamIcon from '@material-ui/icons/Videocam';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
function LeftSideBar() {
  return (
    <div className={styles.leftsidebar}>
      <div className={styles.leftsidebar_container}>
        <Card style={{ boxShadow: 'none', background: 'inherit' }}>
          <CardContent>
            <div>
              <SideBarBtn
                children="Main Feed"
                disabled="true"
                IconLeft={RssFeedIcon}
              />
            </div>
            <div>
              <SideBarBtn
                children="Activity"
                disabled="true"
                IconLeft={TimelineIcon}
              />
            </div>
            <div>
              <SideBarBtn
                children="Friends"
                disabled="true"
                IconLeft={PeopleIcon}
              />
            </div>
            <div>
              <SideBarBtn
                children="Create A Room"
                disabled="true"
                IconLeft={VideocamIcon}
              />
            </div>
            <div>
              <SideBarBtn
                children="Go Live"
                disabled="true"
                IconLeft={WifiTetheringIcon}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LeftSideBar;
