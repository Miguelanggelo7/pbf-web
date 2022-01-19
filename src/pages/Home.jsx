import React from 'react';
import Carrusel from '../components/Carrusel';
import Header from '../components/Header';
import SecondCarrusel from '../components/SecondCarrusel';
import Footer from '../components/Footer';
import { makeStyles, List, ListItem } from "@material-ui/core";
import Fade from "react-reveal";
import ThirdCarrusel from '../components/ThirdCarrusel';

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
    color: '#83BAA6',
    fontSize: '15pt',
  },
  imageNosotros: {
    width: '60%',
    height: '250pt',
    marginBottom: '20pt',
    borderRadius: '10pt',
    "@media (max-width: 650pt)": {
      width: '80%',
      height: '200pt',
    },
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
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
      <Fade>
        <div id="corporales" >
          <p className={classes.titleText}>CORPORALES</p>
          <p className={classes.text1}>Lo mejor para tu cuerpo solo lo conseguiras aqui en Perfect Body Fast, contamos con:</p>
          <ThirdCarrusel/>
        </div>
      </Fade>
      <Fade>
        <div id="sobreNosotros" >
          <p className={classes.titleText}>SOBRE NOSOTROS</p>
          <p className={classes.text1}>Somos una organización dedicada a la medicina y cirugía estética con una atención profesional, especializado en cada área, amable y personalizada con cada uno de nuestros pacientes,  preparados para atenderlo en cualquier tipo de necesidad estética que requiera, ofrecemos tratamientos faciales y corporales, permitiéndoles mejorar su juventud, vitalidad y belleza,  con un alto grado de calidad, atendemos con dedicación y pasión.</p> 
          <img className={classes.imageNosotros} src="https://medica.orbitpublishers.com/wp-content/uploads/2021/06/guia-para-abrir-un-consultorio-medico.jpg"/>
          <div id="ideales">
            <p className={classes.subtitle1}>Misión</p>   
            <p className={classes.text1}>Brindar a nuestros pacientes un estilo de vida saludable e incrementar su esperanza de vida  a través  de  una  atención  personalizada por profesionales médicos para mejorar sus condiciones de salud, bienestar y belleza tanto física como psicológica a través del compromiso de nuestro equipo.</p>
            <p className={classes.subtitle2}>Visión</p>   
            <p className={classes.text1}>Buscar ser la organización mas reconocida a nivel nacional e internacional  por su aporte  en  salud, bienestar, belleza, calidad humana y asesoría médica contando con excelentes procedimientos, tecnológicos y productos, con el fin de consolidarse en una entidad prestadora de servicios médicos estéticos, cada vez más integral.</p>
            <p className={classes.subtitle1}>Valores</p>   
            <List>
              <ListItem>
                <p className={classes.text1}>• Realizar nuestro trabajo con la pasión, dedicación y entusiasmo necesario para llevar a cabo nuestra misión.</p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Honestidad, para transmitir confianza en todos los ámbitos ajustándonos siempre a la verdad.</p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Respeto a nuestros pacientes mejorando su calidad de vida.</p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Puntualidad para estar a tiempo y en el tiempo para satisfacción de nuestros pacientes.</p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Amor para descubrir, aprender y compartir con cada uno de nuestros pacientes sus necesidades y disfrutarla por sus mejoras. </p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Liderar,  motivar y compartir con nuestros pacientes la mejora de su calidad de vida. </p>
              </ListItem>
              <ListItem>
                <p className={classes.text1}>• Confianza para darle la seguridad que su inquietud y necesidad será cubierta por nuestros profesionales a cada pacientes </p>
              </ListItem>
            </List>
          </div>
        </div>
      </Fade>
      <Footer/>
    </div>
  );
}

export default Home;
