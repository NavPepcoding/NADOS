// import React from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { BorderRight } from '@material-ui/icons';
import styles from "./Score.module.css"
function Score(props) {
     let {data}=props;
    // const useStyles = makeStyles({
    //      container:{
    //      marginBottom:"2.8%",
    //      marginTop:"1.9%",
    //       width:"80%",
    //      padding:"5%",
    //      marginLeft:"7%",
    //     display:"flex",
        
    //     alignItems:"center", 
    //     justifyContent:"space-between",
    // //    BorderRight:"2px solid red"npm 
    //      },
    //      text:{
           
    //  color:"black",
    //  fontFamily:"Poppins",
    //  fontSize:"18px",
    //  fontWeight: 700
    //      }
    //  ,score:{
    //      color:"#12DD65",
    //      fontSize:"25px",
    //      fontWeight:700,
    //      fontFamily:"Poppins",
    //  }

    //   });
    //   console.log(data.src)
    //   const classes = useStyles();
    return (
     
       <Card className={styles.container}>
           <Avatar src={data.src}></Avatar>
           <div >
       <Typography className={styles.text}>
      
     {data.name}
      </Typography>
      </div>
      <div>
      <Typography className={styles.score}>
     {data.score}
      </Typography>
      </div>
       </Card>
      

    )
}

export default Score
