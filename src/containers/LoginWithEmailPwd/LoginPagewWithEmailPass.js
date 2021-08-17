import React, { useState } from "react";
import "./LoginPageWithEmailPass.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { Card, Typography, Button, CardContent, Box } from "@material-ui/core";
import CustomInput from "../../components/Inputs/CustomInput";
import { MailRounded } from "@material-ui/icons";
import HttpsIcon from "@material-ui/icons/Https";
function LoginPagewWithEmailPass() {
  const [password, setpassword] = useState("");
  const handleChange = (e) => {
    setpassword(e.target.value);
  };
  return (
    <>
      <Header></Header>
      <div className="maincontainer">
        <div className="craousel__container">
          <LoginSignUpCarousel />
        </div>
        <div className="login__container">
          <div className="login_form">
            <div className="login_container">
              <Box m={2}>
                <Typography variant="h4" className="login">
                  Log In
                </Typography>
              </Box>
              <Card style={{ boxShadow: "none", background: "inherit" }}>
                <CardContent>
                  <Box m={2}>
                    <CustomInput label="Email" disabled="true" IconLeft={MailRounded} />
                  </Box>
                  <Box m={2}>
                    <CustomInput
                      label="Password"
                      IconLeft={HttpsIcon}
                      type="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Box>

                  <Box m={2} component="div" className="forgot">
                    Forgot Password?
                  </Box>
                  <div className="btn">
                    <Button
                      variant="contained"
                      color="primary"
                      className="submit_btn"
                    >
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
}

export default LoginPagewWithEmailPass;
