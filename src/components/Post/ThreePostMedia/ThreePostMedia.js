import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ThreePostStyles from "./ThreePostMedia.module.css"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function ThreePostMedia(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <div className="threeMedia">
        {/* <img src={props.postMedia[0]}></img>
        <img src={props.postMedia[0]}></img>
        <img src={props.postMedia[0]}></img> */}
        <CardMedia
          className={classes.media}
          image={props.postMedia[0]}
          title="Contemplative Reptile"
        />
      </div>
    )
}

export default ThreePostMedia
