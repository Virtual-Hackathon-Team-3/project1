import React from "react";
import {
  TextField,
  Button,
  Paper,
  Input,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Axios from "axios";

import "./LoginForm.css";
import backgroundImg from "../../../images/login-page.jpg";

const useStyles = makeStyles({
  button: {
    borderRadius: 20,
    padding: "5px 30px",
  },
  input: {
    width: "80%",
    marginBottom: "1rem",
  },
});

const LoginForm = () => {
  const classes = useStyles();

  React.useEffect(() => {
    Axios.get("https://88ac12d420d8.ngrok.io/jobs")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let personalData = {};
    personalData["email"] = document.getElementById("username").value;
    personalData["password"] = document.getElementById("password").value;

    Axios.post("https://88ac12d420d8.ngrok.io/userlogin", personalData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="login-form-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="login-form-container">
        <form action="" autoComplete="on" onSubmit={handleSubmit}>
          <h2 className="login-form-title"> Log in </h2>
          <p className="login-form-subtitle"> Applicant / HR </p>
          <Input
            id="username"
            placeholder="Username"
            defaultValue="rohit@vibing.com"
            className={classes.input}
          />
          <br />
          <Input
            id="password"
            placeholder="Password"
            defaultValue="12345"
            className={classes.input}
          />
          <br />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.button}
          >
            Login
          </Button>
        </form>
        <p className="login-register-text"> Register As Applicant?</p>
      </div>
    </div>
  );
};

export default LoginForm;
