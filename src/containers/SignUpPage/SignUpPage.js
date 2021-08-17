import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Avatar,
  CardContent,
  TextField,
  CardActions,
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@material-ui/core";
import { MailRounded, Visibility, VisibilityOff } from "@material-ui/icons";
import "./SignUpPage.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import CustomInput from "../../components/Inputs/CustomInput";
import HttpsIcon from '@material-ui/icons/Https';
import PersonIcon from '@material-ui/icons/Person';

const SignUpPage = () => {
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const handleChange = (e) => {
    setpassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setconfirmPassword(e.target.value);
  };
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Header></Header>
     <div className="maincontainer">
       <div className="craousel__container">
        <LoginSignUpCarousel/>
       </div>
       <div className="login__container">
       <div className="signup_form">
      <div className="signup_container">
        <Box m={2}>
          <Typography variant="h4" className="signup">
            Sign Up
          </Typography>
        </Box>
        <Card
          style={{ boxShadow: "none", background: "inherit" }}
        >
          <CardContent>
            <Box m={2}>
              <CustomInput label="Full name" IconLeft={PersonIcon} />
            </Box>
            <Box m={2}>
              <CustomInput label="Email" IconLeft={MailRounded} />
            </Box>
            <Box m={2}>
              <CustomInput label="Password" IconLeft={HttpsIcon} IconRight={showPassword ? Visibility : VisibilityOff } 
              IconRightOnClick={handleClickShowPassword}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange} />
            </Box>
            <Box m={2}>
              <CustomInput label="Confirm password" IconLeft={HttpsIcon}  IconRightOnClick={handleClickShowConfirmPassword}IconRight={showConfirmPassword ? Visibility : VisibilityOff }
               type={showConfirmPassword ? "text" : "password"} 
               value={confirmPassword}
               onChange={handleConfirmChange}
               />
            </Box>
            <Box m={2}>
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

export default SignUpPage;


