import React, { useState, useEffect } from "react";
import { Card, Typography, Button, CardContent, Box } from "@material-ui/core";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import { MailRounded, Visibility, VisibilityOff } from "@material-ui/icons";
import styles from "./CreateNewPwd.module.css";
import CustomInput from "../../components/Inputs/CustomInput";
import HttpsIcon from "@material-ui/icons/Https";
import PersonIcon from "@material-ui/icons/Person";
import { isPasswordValid } from "../../Utils/Validation";

const CreateNewPwd = () => {
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [isValidPasswordId, setIsValidPasswordId] = useState(1);
  const [errMsg, setErr] = useState("");

  useEffect(() => {
    if (isValidPasswordId == 1) {
      setErr("");
    } else if (isValidPasswordId == 0) {
      setErr("Password mismatched");
    } else {
      setErr("Enter valid password");
    }
  }, [isValidPasswordId]);
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

  const validatePassword = () => {
    if (!isPasswordValid(password)) {
      setIsValidPasswordId(-1);
      return;
    } else if (password != confirmPassword) {
      setIsValidPasswordId(0);
    } else {
      setIsValidPasswordId(1);
      console.log("success");
    }
  };

  return (
    <>
      <Header></Header>
      <div className={styles.maincontainer}>
        <div className={styles.craousel__container}>
          <LoginSignUpCarousel />
        </div>
        <div className={styles.login__container}>
          <div className={styles.confirmpass_form}>
            <div className={styles.confirmpass_container}>
              <Box m={2}>
                <Typography className={styles.signup}>
                  Create New Password
                </Typography>
              </Box>
              <Card style={{ boxShadow: "none", background: "inherit" }}>
                <CardContent>
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={validatePassword}
                      className={styles.submit_btn}
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
};

export default CreateNewPwd;
