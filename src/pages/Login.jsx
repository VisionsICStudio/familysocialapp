import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Login = () => {

  const { history } = [];

  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/dashboard/fullsailstudent");
  };

  return (
    <div className="buttons">
      <button className="button is-success" type="button" onClick={loginUser}>
      Log in
      </button>
    </div>
  )
}

export default Login;
