import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Form from "./pages/Form";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    //Azul
    primary: {
      main: "#83BAA6",
    },
    //Verde
    secondary: {
      main: "#8E7AA7",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Form/>
      </ThemeProvider>
    </div>
  );
}

export default App;
