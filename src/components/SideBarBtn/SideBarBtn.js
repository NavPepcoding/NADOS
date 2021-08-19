import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import styles from './SideBarBtn.module.css';

export default function CustomInput({ label, IconLeft, ...args }) {
  return (
    <Paper component="div" className={styles.root} elevation={0}>
      {IconLeft && <IconLeft className={styles.icon} />}
      <Typography
        {...args}
        className={styles.input}
        placeholder={label}
        inputProps={{ 'aria-label': label }}
      />
    </Paper>
  );
}
