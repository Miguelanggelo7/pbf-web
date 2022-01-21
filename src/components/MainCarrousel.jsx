import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

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

const Carrusel = (props) => {
  const [carrousel, setCarrousel] = useState(null);
  const classes = useStyles();

  useEffect(async () => {
    const response = await fetch("https://pbf-api.herokuapp.com/api/carrousel", {
      method: "GET",
    });

    if (!response.ok) {
      console.log("error")
    }

    const data = await response.json();
    console.log(data)
    setCarrousel(data);
  }, []);

  const CarouselUI = ({ position, handleClick, children }) => (
    <div className={classes.carrusel}>
      {children}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);
  
  return (
    <Carousel>
      {
        carrousel && carrousel.map(item => (
          <Slide right>
            <div className={classes.contentImage}>
              <img className={classes.contentImage} key={item.id} src={item.url}/>
            </div>
          </Slide>
        ))
      }
    </Carousel>
  );
};

export default Carrusel;
