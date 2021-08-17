import React from 'react';
import "./Button.css";
import Button from "@material-ui/core";
function Button(props) {
    const {styles,className,...args} = props
    return (
        <Button styles={{ ...styles }} className={""+" "+ className}  {...args} ></Button>
    )
}

export default Button;
