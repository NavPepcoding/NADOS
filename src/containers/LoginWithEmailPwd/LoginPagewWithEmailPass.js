import React, { useState, useEffect } from "react";
import styles from "./LoginPageWithEmailPass.module.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { Card, Typography, Button, CardContent, Box } from "@material-ui/core";
import CustomInput from "../../components/Inputs/CustomInput";
import { MailRounded } from "@material-ui/icons";
import HttpsIcon from "@material-ui/icons/Https";
import { useHistory } from "react-router-dom";
function LoginPagewWithEmailPass() {
  const [password, setpassword] = useState("");
const history = useHistory();

  const handleChange = (e) => {
    setpassword(e.target.value);
    console.log(e.target.value);
  };
  const submitBtnHandler = ()=>{
    history.push("/feed")
  }
  const forgotBtnHandler = ()=>{
    history.push("/otp")
  }
  return (
    <>
      <Header></Header>
      <div className={styles.maincontainer}>
        <div className={styles.craousel__container}>
          <LoginSignUpCarousel />
        </div>
        <div className={styles.login__container}>
          <div className={styles.login_form}>
            <div className={styles.login_container}>
              <Box m={2}>
                <Typography variant="h4" className={styles.login}>
                  Log In
                </Typography>
              </Box>
              <Card style={{ boxShadow: "none", background: "inherit" }}>
                <CardContent>
                  <Box m={2}>
                    <CustomInput
                      label="Email"
                      disabled="true"
                      IconLeft={MailRounded}
                    />
                  </Box>
                  <Box m={2}>
                    <CustomInput
                      label="Password"
                      IconLeft={HttpsIcon}
                      onKeyPress={(e)=>{if(e.key=="Enter")e.preventDefault();}}
                      type="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </Box>

                  <Box m={2} component="div" className={styles.forgot} onClick={forgotBtnHandler}>
                    Forgot Password?
                  </Box>
                  <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.submit_btn}
                      onClick={submitBtnHandler}
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
