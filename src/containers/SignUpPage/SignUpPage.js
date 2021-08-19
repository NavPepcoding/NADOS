import React, { useState,useEffect } from "react";
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
import styles from "./SignUpPage.module.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import CustomInput from "../../components/Inputs/CustomInput";
import HttpsIcon from "@material-ui/icons/Https";
import PersonIcon from "@material-ui/icons/Person";
import {isPasswordValid} from "../../Utils/Validation"
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [isValidPasswordId, setIsValidPasswordId] = useState(1);
  const [errMsg, setErr] = useState("");
  const history = useHistory()
  const handleChange = (e) => {
    setpassword(e.target.value);
  };
  const handleConfirmChange = (e) => {
    setconfirmPassword(e.target.value);
  };
  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };
  
  useEffect(() => {
    if (isValidPasswordId == 1) {
      setErr("");
    } else if (isValidPasswordId == 0) {
      setErr("Password mismatched");
    } else {
      setErr("Enter valid password");
    }
  }, [isValidPasswordId]);

  const validatePassword = () => {
    if (!isPasswordValid(password)) {
      setIsValidPasswordId(-1);
      return;
    } else if (password != confirmPassword) {
      setIsValidPasswordId(0);
    } else {
      setIsValidPasswordId(1);
      history.push("/otp")
    }
  };


  return (
    <>
      <Header></Header>
      <div className={styles.main__container}>
        <div className={styles.craousel__container}>
          <LoginSignUpCarousel />
        </div>
        <div className={styles.login__container}>
          <div className={styles.signup_form}>
            <div className={styles.signup_container}>
              <Box m={2}>
                <Typography variant="h4" className={styles.signup}>
                  Sign Up
                </Typography>
              </Box>
              <Card style={{ boxShadow: "none", background: "inherit" }}>
                <CardContent>
                  <Box m={2}>
                    <CustomInput
                      label="Full name"
                      onKeyPress={(e) => {
                        if (e.key == "Enter") e.preventDefault();
                      }}
                      onChange={handleNameChange}
                      IconLeft={PersonIcon}
                    />
                  </Box>
                  <Box m={2}>
                    <CustomInput
                      label="Email"
                      onKeyPress={(e) => {
                        if (e.key == "Enter") e.preventDefault();
                      }}
                      IconLeft={MailRounded}
                    />
                  </Box>
                  <Box m={2}>
                    <CustomInput
                      label="Password"
                      onKeyPress={(e) => {
                        if (e.key == "Enter") e.preventDefault();
                      }}
                      IconLeft={HttpsIcon}
                      IconRight={showPassword ? Visibility : VisibilityOff}
                      IconRightOnClick={handleClickShowPassword}
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handleChange}
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
                      onKeyPress={(e) => {
                        if (e.key == "Enter") e.preventDefault();
                      }}
                      onChange={handleConfirmChange}
                    />
                  </Box>
                  <span className={styles.errMsg}>{errMsg}</span>
                  <div className={styles.btn}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.submit_btn}
                      onClick={validatePassword}
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

export default SignUpPage;
