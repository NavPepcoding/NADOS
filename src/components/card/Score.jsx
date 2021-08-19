// import React from 'react'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import styles from "./Score.module.css";
function Score(props) {
  let { data } = props;
  return (
    <Card className={styles.container}>
      <Avatar src={data.src}></Avatar>
      <div>
        <Typography className={styles.text}>{data.name}</Typography>
      </div>
      <div>
        <Typography className={styles.score}>{data.score}</Typography>
      </div>
    </Card>
  );
}

export default Score;
