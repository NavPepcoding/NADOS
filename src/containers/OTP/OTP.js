import React, { useState , Component } from "react";
import styles from "./OTP.module.css";
import OtpInput from 'react-otp-input';
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import {
   Card,
   Typography,
   Button,
   CardContent,
   Box,
 } from "@material-ui/core";


const OTP = () => {
  const [otp, setotp] = useState("");

  const handleChange = (otp) => {
    setotp(otp)
  }
  return (
    <>
    <Header></Header>
     <div className="maincontainer">
       <div className="craousel__container">
        <LoginSignUpCarousel/>
       </div>
       <div className="login__container">
       <div className={styles.otp_form}>
   <div className={styles.otp_container}>
     <Box m={2}>
       <Typography variant="h5" className={styles.otp}>
         Please enter your OTP
       </Typography>
     </Box>
     <Card
       style={{ boxShadow: "none", background: "inherit" }}
     >
       <CardContent>
         <Box m={2}>
         <OtpInput value={otp} onChange={handleChange} numInputs={6} shouldAutoFocus isInputNum={true} inputStyle={{height: "2.4rem",width:"2.2rem",borderRadius:"5px",background: "#E4E4E4",border:"none",marginRight:"10px"}} separator={<span></span>} />
         </Box>

         <div className="btn">
           <Button variant="contained" color="primary" className="submit_btn">
             SUBMIT
           </Button>
         </div>
       </CardContent>
     </Card>
   </div>
 </div>

       </div>
     </div>
     </>
    
  
  );
};

export default OTP;


