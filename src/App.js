import React, {Suspense, lazy} from 'react';
import './App.css';
import Form from "./pages/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import TermsDialog from './components/TermsDialog';
import Fade from 'react-reveal';
import Loading from './components/Loading';

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

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/Home")), 4000);
  });
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading/>} >
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
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
