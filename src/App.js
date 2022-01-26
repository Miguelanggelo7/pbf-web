import React, {Suspense, lazy, useState, useEffect} from 'react';
import './App.css';
import Form from "./pages/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import TermsDialog from './components/TermsDialog';
import Home from "./pages/Home";
import { SnackbarProvider } from "notistack";

const theme = createMuiTheme({
  palette: {
    //Verde
    primary: {
      main: "#83BAA6",
    },
    //Morado
    secondary: {
      main: "#8E7AA7",
    },
  },
});



const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Router>  
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/form">
                  <Form />
                </Route>
                <Route exact path="/terms">
                  <TermsDialog/>
                </Route>
              </Switch>
            </Router>
          </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
