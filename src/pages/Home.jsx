import React, { useState } from 'react';
import Carrusel from '../components/MainCarrousel';
import Header from '../components/Header';
import SecondCarrusel from '../components/FacialCarrousel';
import Footer from '../components/Footer';
import { makeStyles, List, ListItem, Paper } from "@material-ui/core";
import Fade from "react-reveal";
import ThirdCarrusel from '../components/CorporalCarrousel';
import logoPrueba from '../assets/logoprueba.png';
import Cookies from '../components/Cookies';

const useStyles = makeStyles({
  text2: {
    marginTop: '50pt',
  },
  text1: {
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
      height: '340pt',
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
      height: '340pt',
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
  const [show, setShow] = useState(false);
  const elevat = window.matchMedia("(min-width: 650pt)").matches ? 4 : 0;

  return (
    <div>
      <Header />
      <Carrusel />
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
          <SecondCarrusel/>
        </div>
      </Fade>
      <Fade bottom>
        <div id="corporales" >
          <p className={classes.titleText}>CORPORALES</p>
          <p className={classes.text3}>Lo mejor para tu cuerpo solo lo conseguiras aqui en Perfect Body Fast, contamos con:</p>
          <ThirdCarrusel />
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.nosotrosContainer} id="sobreNosotros" >
          <p className={classes.titleText}>SOBRE NOSOTROS</p>
          <p className={classes.text3}>Somos una organizaci??n dedicada a la medicina y cirug??a est??tica con una atenci??n profesional, especializado en cada ??rea, amable y personalizada con cada uno de nuestros pacientes,  preparados para atenderlo en cualquier tipo de necesidad est??tica que requiera, ofrecemos tratamientos faciales y corporales, permiti??ndoles mejorar su juventud, vitalidad y belleza,  con un alto grado de calidad, atendemos con dedicaci??n y pasi??n.</p> 
          <img className={classes.imageNosotros} src={logoPrueba}/>
          <div  className={classes.idealesCards} id="ideales" style={{marginTop: '10pt', marginBottom: '10pt'}}>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card}>
              <p className={classes.subtitle1}>Misi??n</p>
              <p className={classes.text1}>Brindar a nuestros pacientes un estilo de vida saludable e incrementar su esperanza de vida  a trav??s  de  una  atenci??n  personalizada por profesionales m??dicos para mejorar sus condiciones de salud, bienestar y belleza tanto f??sica como psicol??gica a trav??s del compromiso de nuestro equipo.</p>
            </Paper>
           </Fade>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card2}>
              <p className={classes.subtitle2}>Valores</p>   
              <List style={{marginTop: '-10pt'}}>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Realizar nuestro trabajo con la pasi??n, dedicaci??n y entusiasmo necesario para llevar a cabo nuestra misi??n.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Honestidad, para transmitir confianza en todos los ??mbitos ajust??ndonos siempre a la verdad.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Respeto a nuestros pacientes mejorando su calidad de vida.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Puntualidad para estar a tiempo y en el tiempo para satisfacci??n de nuestros pacientes.</p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Amor para descubrir, aprender y compartir con cada uno de nuestros pacientes sus necesidades y disfrutarla por sus mejoras. </p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Liderar,  motivar y compartir con nuestros pacientes la mejora de su calidad de vida. </p>
                  </ListItem>
                </Fade>
                <Fade bottom>
                  <ListItem>
                    <p className={classes.text1}>??? Confianza para darle la seguridad que su inquietud y necesidad ser?? cubierta por nuestros profesionales a cada pacientes </p>
                  </ListItem>
                </Fade>
              </List>
            </Paper>
           </Fade>
           <Fade bottom>
            <Paper elevation={elevat} className={classes.card}>
              <p className={classes.subtitle1}>Visi??n</p>   
              <p className={classes.text1}>Buscar ser la organizaci??n mas reconocida a nivel nacional e internacional  por su aporte  en  salud, bienestar, belleza, calidad humana y asesor??a m??dica contando con excelentes procedimientos, tecnol??gicos y productos, con el fin de consolidarse en una entidad prestadora de servicios m??dicos est??ticos, cada vez m??s integral.</p>
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
