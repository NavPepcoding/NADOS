import React, { useState } from "react";
import { Typography, Button, Box, TextField } from "@material-ui/core";
import "./Login.css";
import Facebook from "../../assets/Vector.svg";
import Google from "../../assets/google.svg";
import AuthButton from "../../components/AuthButton/AuthButton";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import CustomInput from "../../components/Inputs/CustomInput";
import { MailRounded } from "@material-ui/icons";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [isValidEmailId, setIsValidEmailId] = useState(true);

  const validateEmail = () => {
    if (!isEmailValid(emailId)) {
      setIsValidEmailId(false);
      return;
    }
    setIsValidEmailId(true);
  };

  const isEmailValid = (emailId) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailId);
  };

  return (
    <>
      <Header></Header>
      <div className="maincontainer">
        <div className="craousel__container">
          <LoginSignUpCarousel />
        </div>
        <div className="login__container">
          <Box className="login__form" component="div">
            <Box marginBottom={2} width="80%">
              <Typography variant="h4" style={{fontWeight:"600"}}>
                Login
              </Typography>
            </Box>
            <Box className="login__container" component="div">
              <AuthButton image={Facebook} authType="FaceBook" />
              <AuthButton image={Google} authType="Google" />

              <Box component="div" className="or_container">
                <Box width="100px" component="div" borderBottom={1}></Box>
                <Box component="div">OR</Box>
                <Box width="100px" component="div" borderBottom={1}></Box>
              </Box>
            </Box>

            <Box className="formEmail__info" component="div">
              Use your email address
            </Box>
            <Box className="form__container" component="div">
              <Box m={2}  style={{width:"100%"}}>
                <CustomInput label="Email" IconLeft={MailRounded} />
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  console.log("HELLO", emailId);
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Login;