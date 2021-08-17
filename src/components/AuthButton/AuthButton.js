import React from 'react';
import { Box, Button } from '@material-ui/core';
const AuthButton = (props) => {
  const { image, authType } = props;
  return (
    <Box marginBottom={2}  width="80%"  >
      <Button
        className="authLogin__btn"
        fullWidth
        variant="contained"
        color="default"
        startIcon={<img alt="" src={image} />}
        style={{justifyContent:"normal",fontSize:"10px",fontWeight:"800", paddingLeft:"22%"}}
        
      >
        <span>

        Login With {authType}
        </span>
      </Button>
    </Box>
  );
};

export default AuthButton;