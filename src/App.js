import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import TermsDialog from './components/TermsDialog';

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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/terms">
              <TermsDialog/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
