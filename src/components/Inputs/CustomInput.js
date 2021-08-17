import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '-webkit-fill-available',
      backgroundColor: '#E5E5E5CC',
      borderRadius: "8px"

   },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  icon:{
     width: "20px",
     height: "20px"
  }
}));

export default function CustomInput({label, IconLeft, IconRight,IconRightOnClick,...args}) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      {IconLeft && <IconButton className={classes.iconButton} aria-label="menu">
        <IconLeft  className={classes.icon} />
      </IconButton>}
      <InputBase
      {...args}
        className={classes.input}
        placeholder={label}
        inputProps={{ 'aria-label': label }}
      />
      {IconRight && <IconButton onClick={IconRightOnClick}  className={classes.iconButton} aria-label={label}>
        <IconRight className={classes.icon}/>
      </IconButton>}
    </Paper>
  );
}
