import React ,{useState} from 'react';
import "./ForgotPassword.css";
import Header from "../../components/LoginSignupHeader/LoginSignUpHeader";
import LoginSignUpCarousel from "../../components/LoginSignUpCarousel/LoginSignupCarousel";
import {
   Card,
   Typography,
   Button,
   CardContent,
   Box,
 } from "@material-ui/core";
 import CustomInput from "../../components/Inputs/CustomInput";
 import { MailRounded} from "@material-ui/icons";
 import HttpsIcon from '@material-ui/icons/Https';
function ForgotPassword() {
   const [password, setpassword] = useState("");
   const handleChange = (e) => {
      setpassword(e.target.value);
    };
   return (
    <>
    <Header></Header>
     <div className="maincontainer">
       <div className="craousel__container">
        <LoginSignUpCarousel/>
       </div>
       <div className="login__container">
       <div className="forgotpass_form">
      <div className="forgotpass_container">
        <Box m={2}>
          <Typography variant="h4" className="forgotpass">
            Forgot Password
          </Typography>
        </Box>
        <Card
          style={{ boxShadow: "none", background: "inherit" }}
        >
          <CardContent>

            <Box m={2}>
              <CustomInput label="Email" IconLeft={MailRounded} />
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
     
   )
}

export default ForgotPassword;
