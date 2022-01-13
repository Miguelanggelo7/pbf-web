import './App.css';
import Carrusel from './components/Carrusel';
import Header from './components/Header';
import SecondCarrusel from './components/SecondCarrusel';
import Footer from './components/Footer';
import { makeStyles } from "@material-ui/core";
import Fade from "react-reveal";

const useStyles = makeStyles({
  text2: {
    marginTop: '50pt',
  },
  text1: {
    textTransform: 'uppercase',
  },
  titleText: {
    marginTop: '50pt',
    fontSize: '30pt',
    background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header/>
      <Carrusel/>
      <Fade>
        <p className={classes.text2}>CONSULTA GRATIS PARA CADA UNO DE NUESTROS SERVICIOS</p>
      </Fade>
      <Fade>
        <div id="faciales" >
          <p className={classes.titleText}>FACIALES</p>
          <p className={classes.text1}>Lo mejor para tu rostro solo lo conseguiras aqui en Perfect Body Fast, contamos con:</p>
          <SecondCarrusel/>
        </div>
      </Fade>
      <Footer/>
    </div>
  );
}

export default App;
