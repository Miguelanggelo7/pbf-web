import React, { useState, useEffect } from 'react';
import Carrusel from '../components/MainCarrousel';
import Header from '../components/Header';
import SecondCarrusel from '../components/FacialCarrousel';
import Footer from '../components/Footer';
import { makeStyles, List, ListItem, Paper } from "@material-ui/core";
import Fade from "react-reveal";
import ThirdCarrusel from '../components/CorporalCarrousel';
import Loading from '../components/Loading';
import logoPrueba from '../assets/logoprueba.png';
import Cookies from '../components/Cookies';
import Cookie from "universal-cookie";
import { useSnackbar } from "notistack"; 

const useStyles = makeStyles({
  text2: {
    marginTop: '50pt',
  },
  text1: {
    textTransform: 'uppercase',
    maxWidth: '85vw',
    margin: 'auto',
    "@media (max-width: 650pt)": {
      maxWidth: '95vw',
    },
    "@media (min-width: 650pt)": {
      marginLeft: '10pt',
      marginRight: '10pt',
    },
  },
  titleText: {
    marginTop: '50pt',
    fontSize: '30pt',
    background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle1: {
    textTransform: 'uppercase',
    maxWidth: '80vw',
    margin: 'auto',
    "@media (max-width: 650pt)": {
      maxWidth: '95vw',
    },
    "@media (min-width: 1000pt)": {
      width: '100%',
      paddingTop: '10pt',
    },
    color: '#8E7AA7',
    fontSize: '15pt',
  },
  subtitle2: {
    textTransform: 'uppercase',
    maxWidth: '80vw',
    margin: 'auto',
    "@media (max-width: 650pt)": {
      maxWidth: '95vw',
    },
    "@media (min-width: 1000pt)": {
      width: '100%',
      paddingTop: '10pt',
    },
    color: '#83BAA6',
    fontSize: '15pt',
  },
  imageNosotros: {
    width: '250pt',
    height: '250pt',
    marginBottom: '20pt',
    marginTop: '-20pt',
    borderRadius: '10pt',
    "@media (max-width: 400pt)": {
      width: '80%',
      height: '200pt',
      marginTop: '0',
    },
  },
  text3: {
    textTransform: 'uppercase',
    maxWidth: '85vw',
    margin: 'auto',
    "@media (max-width: 650pt)": {
      maxWidth: '95vw',
      paddingBottom: '10pt',
    },
    paddingBottom: '40pt',
  },
  idealesCards: {
    "@media (min-width: 1000pt)": {
      display: 'inline-flex'
    },
  },
  card: {
    "@media (min-width: 1000pt)": {
      width: '20vw',
      height: '320pt',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    marginBottom: '20pt',
  },
  card2: {
    "@media (min-width: 1000pt)": {
      width: '50vw',
      marginLeft: '20pt',
      marginRight: '20pt',
      height: '320pt',
    },
    marginBottom: '20pt',
  },
  nosotrosContainer: {
    "@media (min-width: 1000pt)": {
      marginBottom: '20pt',
    },
  }
});

const Home = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [carrousel, setCarrousel] = useState(null);
  const [faciales, setFaciales] = useState(null);
  const [corporales, setCorporales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  window.onbeforeunload = () => {
    const cookie = new Cookie();
    const diff = Math.abs(cookie.get("timeIn") - Date.now());
    const seconds = Math.floor(diff/1000);
    cookie.set("secondsInWeb", seconds , {path: "/"});
  }

  const elevat = window.matchMedia("(min-width: 650pt)").matches ? 4 : 0;

  useEffect(() => {
    const cookie = new Cookie();
    if(typeof cookie.get("timeIn") === "undefined") setShow(true);

    const now = new Date();
    const expire = now.setDate(now.getDate() + 7);
    cookie.set("timeIn", Date.now(), {path: "/", expires: new Date(expire)});

    const getDataCarrousel = async () => {
      const response = await fetch("https://pbf-api.herokuapp.com/api/carrousel", {
        method: "GET",
      });

      if (!response.ok) {
        return enqueueSnackbar("Se ha producido un error al comunicarse con el servidor", {
          variant: "error"
        })
      }

      const data = await response.json();
      setCarrousel(data);
    };

    const getDataFacial = async () => {
      const response = await fetch("https://pbf-api.herokuapp.com/api/faciales", {
        method: "GET",
      });

      if (!response.ok) {
        return enqueueSnackbar("Se ha producido un error al comunicarse con el servidor", {
          variant: "error"
        })
      }

      const data = await response.json();
      setFaciales(data);
    };

    const getDataCorporal = async () => {
      const response = await fetch("https://pbf-api.herokuapp.com/api/corporales", {
        method: "GET",
      });

      if (!response.ok) {
        return enqueueSnackbar("Se ha producido un error al comunicarse con el servidor", {
          variant: "error"
        })
      }

      const data = await response.json();
      setCorporales(data);
    };

    getDataCarrousel();
    getDataCorporal();
    getDataFacial();
  }, []);

  const interval = setInterval(() => {
    if (carrousel && faciales && corporales) {
      setLoading(false);
      clearInterval(interval);
    } 
  }, 2000);

  if (loading) {
    return(
      <Loading />
    )
  }

  return (
    <div>
      <Header />
      <Carrusel {...{carrousel}}/>
      {
        show ? <Cookies /> : null
      }
      <Fade bottom>
        <p className={classes.text2}>CONSULTA GRATIS PARA CADA UNO DE NUESTROS SERVICIOS</p>
      </Fade>
      <Fade bottom>
        <div id="faciales" >
          <p className={classes.titleText}>FACIALES</p>
          <p className={classes.text3}>Lo mejor para tu rostro solo lo conseguiras aqui en Perfect Body Fast, contamos con:</p>
          <SecondCarrusel {...{faciales}}/>
        </div>
      </Fade>
      <Fade bottom>
        <div id="corporales" >
          <p className={classes.titleText}>CORPORALES</p>
          <p className={classes.text3}>Lo mejor para tu cuerpo solo lo conseguiras aqui en Perfect Body Fast, contamos con:</p>
          <ThirdCarrusel {...{corporales}}/>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.nosotrosContainer} id="sobreNosotros" >
          <p className={classes.titleText}>SOBRE NOSOTROS</p>
          <p className={classes.text3}>Somos una organización dedicada a la medicina y cirugía estética con una atención profesional, especializado en cada área, amable y personalizada con cada uno de nuestros pacientes,  preparados para atenderlo en cualquier tipo de necesidad estética que requiera, ofrecemos tratamientos faciales y corporales, permitiéndoles mejorar su juventud, vitalidad y belleza,  con un alto grado de calidad, atendemos con dedicación y pasión.</p> 
          <img className={classes.imageNosotros} src={logoPrueba}/>
          <div  className={classes.idealesCards} id="ideales" style={{marginTop: '10pt', marginBottom: '10pt'}}>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card}>
              <p className={classes.subtitle1}>Misión</p>
              <p className={classes.text1}>Brindar a nuestros pacientes un estilo de vida saludable e incrementar su esperanza de vida  a través  de  una  atención  personalizada por profesionales médicos para mejorar sus condiciones de salud, bienestar y belleza tanto física como psicológica a través del compromiso de nuestro equipo.</p>
            </Paper>
           </Fade>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card2}>
              <p className={classes.subtitle2}>Valores</p>   
              <List style={{marginTop: '-10pt'}}>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Realizar nuestro trabajo con la pasión, dedicación y entusiasmo necesario para llevar a cabo nuestra misión.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Honestidad, para transmitir confianza en todos los ámbitos ajustándonos siempre a la verdad.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Respeto a nuestros pacientes mejorando su calidad de vida.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Puntualidad para estar a tiempo y en el tiempo para satisfacción de nuestros pacientes.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Amor para descubrir, aprender y compartir con cada uno de nuestros pacientes sus necesidades y disfrutarla por sus mejoras. </p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Liderar,  motivar y compartir con nuestros pacientes la mejora de su calidad de vida. </p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>• Confianza para darle la seguridad que su inquietud y necesidad será cubierta por nuestros profesionales a cada pacientes </p>
                  </ListItem>
                </Fade>
              </List>
            </Paper>
           </Fade>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card}>
              <p className={classes.subtitle1}>Visión</p>   
              <p className={classes.text1}>Buscar ser la organización mas reconocida a nivel nacional e internacional  por su aporte  en  salud, bienestar, belleza, calidad humana y asesoría médica contando con excelentes procedimientos, tecnológicos y productos, con el fin de consolidarse en una entidad prestadora de servicios médicos estéticos, cada vez más integral.</p>
            </Paper>
           </Fade>
          </div>
        </div>
      </Fade>
      <Footer/>
    </div>
  );
}

export default Home;
