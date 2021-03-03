import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import "./App.css";
import theme from "./UI/Theme/theme";

import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm/Register";
import DashBoards from "./components/DashBoards/Dashboards";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/dashboard" component={DashBoards} />
            <Route exact path="/applicant-profile" component={DashBoards} />
            <Route exact path="/post-job" component={DashBoards} />
            <Route exact path="/applicant-profile" component={DashBoards} />
            <Route exact path="/job-posts/:id" component={DashBoards} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
