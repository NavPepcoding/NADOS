import React, { useState , Component } from "react";
import styles from "./OTP.module.css";
import OtpInput from 'react-otp-input';
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { Card, Typography, Button, CardContent, Box } from "@material-ui/core";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { MailRounded, Visibility, VisibilityOff } from "@material-ui/icons";
import styles from "./CreateNewPwd.module.css";
import CustomInput from "../../components/Inputs/CustomInput";
import HttpsIcon from "@material-ui/icons/Https";
import PersonIcon from "@material-ui/icons/Person";
import { isPasswordValid } from "../../Utils/Validation";

import {
   Card,
   Typography,
   Button,
   CardContent,
   Box,
 } from "@material-ui/core";
import { useHistory } from "react-router-dom";

 const OTP = () => {
  const history = useHistory();
  const [otp, setotp] = useState("");

  const handleChange = (otp) => {
    setotp(otp)
  }

  const submitBtnHandler = ()=>{
    history.push("/feed")
  }

  return (
    <>
    <Header></Header>
     <div className={styles.main__container}>
       <div className={styles.craousel__container}>
        <LoginSignUpCarousel/>
       </div>
       <div className={styles.login__container}>
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
         <Box m={2}>
                    <CustomInput
                      label="Password"
                      IconLeft={HttpsIcon}
                      IconRight={showPassword ? Visibility : VisibilityOff}
                      IconRightOnClick={handleClickShowPassword}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handleChange}
                      onKeyPress={(e)=>{if(e.key=="Enter")e.preventDefault();}}
                    />
                  </Box>
                  <Box m={2}>
                    <CustomInput
                      label="Confirm password"
                      IconLeft={HttpsIcon}
                      IconRightOnClick={handleClickShowConfirmPassword}
                      IconRight={
                        showConfirmPassword ? Visibility : VisibilityOff
                      }
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmChange}
                      onKeyPress={(e)=>{if(e.key=="Enter")e.preventDefault();}}
                    />
                  </Box>
                  <span className={styles.errMsg}>{errMsg}</span>
         <div className={styles.btn}>
           <Button variant="contained" color="primary" className="submit_btn" onClick={submitBtnHandler}>
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


