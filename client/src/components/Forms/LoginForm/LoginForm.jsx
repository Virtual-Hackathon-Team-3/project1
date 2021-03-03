import React from "react";
import { TextField, Button } from "@material-ui/core";

import "./LoginForm.css";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <TextField variant="outlined" />
        <TextField variant="outlined" />
        <Button> Login </Button>
      </form>
    </div>
  );
};

export default LoginForm;
