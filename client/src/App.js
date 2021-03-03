import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import "./App.css";
import theme from "./UI/Theme/theme";

import LoginForm from "./components/Forms/LoginForm/LoginForm";

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={LoginForm} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
