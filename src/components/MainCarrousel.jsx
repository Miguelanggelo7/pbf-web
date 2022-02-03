import React from "react";
import { makeStyles } from "@material-ui/core";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import img1 from "../assets/carrousel/4a8c714484f327db9a95be55c77f8b4e.jpg";
import img2 from "../assets/carrousel/6fd42a85bfb918562a9bf434e9f7fcca.jpg";
import img3 from "../assets/carrousel/c1d5ab9b9dad0254650161af113deb5a.jpg";


// ESTILOS
const useStyles = makeStyles({
  carrusel: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Quicksand',
    bottom: '0',
    backgroundColor: '#fafafa',
    height: '100vh',
    "@media (max-width: 650pt)": {
      height: '300px',
      marginTop:'120px',
    }
  },
  contentImage: {
    width: '100%',
    height: '100vh',
    "@media (max-width: 650pt)": {
      height: '300px',
    }
  },
});

const Carrusel = ( props ) => {
  const classes = useStyles();

  const CarouselUI = ({ position, handleClick, children }) => (
    <div className={classes.carrusel}>
      {children}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);
  
  return (
    <Carousel>
      <Slide right>
        <div className={classes.contentImage}>
          <img className={classes.contentImage} src={img1}/>
        </div>
      </Slide>
      <Slide right>
        <div className={classes.contentImage}>
          <img className={classes.contentImage} src={img2}/>
        </div>
      </Slide>
      <Slide right>
        <div className={classes.contentImage}>
          <img className={classes.contentImage} src={img3}/>
        </div>
      </Slide>
    </Carousel>
  );
};

export default Carrusel;
