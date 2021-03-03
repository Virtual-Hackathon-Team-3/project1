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

import "./Register.css";
import backgroundImg from "../../../images/login-page.jpg";

const useStyles = makeStyles({
  button: {
    borderRadius: 20,
    padding: "5px 30px",
  },
  input: {
    marginBottom: "1rem",
  },
});

const RegisterForm = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputArr = [
      "Firstname",
      "Surname",
      "DOB",
      "email",
      "password",
      "address",
    ];

    const files = Array.from(document.getElementById("CV").files[0]);

    const inputArrNumber = ["number", "workexp", "CGPA"];

    let personalData = {};
    inputArr.forEach((item) => {
      personalData[item] = document.getElementById(item).value;
    });
    inputArrNumber.forEach((item) => {
      personalData[item] = document.getElementById(item).valueAsNumber;
    });
    personalData["status"] = "created";

    const json = JSON.stringify(personalData);
    const blob = new Blob([json], {
      type: "application/json",
    });
    const data = new FormData();
    data.append("document", blob);
    data.append("CV", files);

    Axios.post("https://835b15f2f17d.ngrok.io/userregister", personalData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="login-form-page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="register-form-container">
        <h2 className="login-form-title"> Register </h2>
        <p className="login-form-subtitle"> All Fields Required </p>
        <form
          className="signup-form"
          action=""
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <div className="signup-form-row">
            <div>
              <label> First Name </label>
              <br />
              <Input id="Firstname" placeholder="First" required />
            </div>

            <div>
              <label> Last Name </label>
              <br />
              <Input id="Surname" placeholder="Last" required />
            </div>
            <div>
              <label> Date of Birth </label>
              <br />
              <Input id="DOB" type="date" required />
            </div>
          </div>

          <div className="signup-form-row">
            <div>
              <label> Email Address </label>
              <br />
              <Input
                type="email"
                id="email"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label> Phone Number </label>
              <br />
              <Input type="number" id="number" placeholder="+91" required />
            </div>
            <div>
              <label>Address</label>
              <br />
              <Input id="address" required />
            </div>
          </div>

          <div className="signup-form-row">
            <div>
              <label>Upload CV</label>
              <br />
              <Input type="file" id="CV" placeholder="File Name..." />
            </div>
            <div>
              <label>CGPA</label>
              <br />
              <Input type="number" id="CGPA" required />
            </div>
            <div>
              <label>Total Work Experience</label>
              <br />
              <Input
                type="number"
                id="workexp"
                placeholder="In Years "
                required
              />
            </div>
          </div>

          <div className="signup-form-row">
            <div>
              <label>Enter Password</label>
              <br />
              <Input
                type="password"
                id="password"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <br />
              <Input
                type="password"
                id="emailId"
                placeholder="example@mail.com"
                required
              />
            </div>
          </div>

          <div>
            <Button color="primary" variant="contained" type="submit">
              REGISTER
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
