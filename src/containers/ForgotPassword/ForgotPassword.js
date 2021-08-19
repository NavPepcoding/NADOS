import React, { useState, useEffect } from "react";
import styles from "./ForgotPassword.module.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { Card, Typography, Button, CardContent, Box } from "@material-ui/core";
import CustomInput from "../../components/Inputs/CustomInput";
import { MailRounded } from "@material-ui/icons";
import HttpsIcon from "@material-ui/icons/Https";
import {isEmailValid} from "../../Utils/Validation"
function ForgotPassword() {
  const [emailId, setEmailId] = useState("");
  const [isValidEmailId, setIsValidEmailId] = useState(true);
  const [password, setpassword] = useState("");
  const handleChange = (e) => {
    setpassword(e.target.value);
  };


  const validateEmail = () => {
    if (!isEmailValid(emailId)) {
      setIsValidEmailId(false);
      return;
    }
    setIsValidEmailId(true);
  };

  useEffect(() => {
    if (isValidEmailId) {
      // history.push("/")
      console.log("success");
    }
  }, [isValidEmailId]);

  return (
    <>
      <Header></Header>
      <div className={styles.maincontainer}>
        <div className={styles.craousel__container}>
          <LoginSignUpCarousel />
        </div>
        <div className={styles.login__container}>
          <div className={styles.forgotpass_form}>
            <div className={styles.forgotpass_container}>
              <Box m={2}>
                <Typography variant="h4" className={styles.forgotpass}>
                  Forgot Password
                </Typography>
              </Box>
              <Card style={{ boxShadow: "none", background: "inherit" }}>
                <CardContent>
                  <Box m={2}>
                    <CustomInput
                      label="Email"
                      IconLeft={MailRounded}
                      onKeyPress={(e) => {
                        if (e.key == "Enter") e.preventDefault();
                      }}
                      value={emailId}
                      onChange={(e) => {
                        setEmailId(e.target.value);
                      }}
                    />
                  </Box>
                  <h1 className={styles.errMsg}>
                    {isValidEmailId ? "" : "Enter Valid Email"}
                  </h1>

                  <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.submit_btn}
                      onClick={() => {
                        validateEmail();
                      }}
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

export default ForgotPassword;
