import React from "react";
import LoginPageWithEmailPass from "./containers/LoginWithEmailPwd/LoginPagewWithEmailPass";
import HomePage from "./containers/HomePage/HomePage";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import SignUpPage from "./containers/SignUpPage/SignUpPage";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import CreateNewPwd from "./containers/CreateNewPwd/CreateNewPwd";
import OTP from "./containers/OTP/OTP";
import Login from "./containers/Login/Login";
const Navigator = () => {
  return (
    <>
    {/* <Login /> */}
    
      <Router>
        <Switch>
          <Route path="/email" component={LoginPageWithEmailPass}></Route>
         
          <ProtectedRoute path="/" exact params={HomePage}></ProtectedRoute>
          <Route path="/forgotpassword" exact component={ForgotPassword} ></Route>
          <Route path="/createnewpwd" exact component={CreateNewPwd}></Route>
          <Route path="/signup" exact component={SignUpPage}></Route>
          <Route path="/otp" exact component={OTP}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
};

function ProtectedRoute(props) {
  let Component = props.params;
  return (
    <Route
      {...props}
      render={(props) => {
        return true ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login"></Redirect>
        );
      }}
    ></Route>
  );
}

export default Navigator;
