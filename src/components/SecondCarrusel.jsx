import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./secondStyle.css";
import InfoCarrusel from "./InfoCarrusel";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

// ESTILOS
const useStyles = makeStyles({
    box: {
      
    }
});

const SecondCarrusel = (props) => {
  const classes = useStyles();

  const navigation = window.matchMedia("(min-width: 650pt)").matches ? true : false;
  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} navigation={navigation} className="mySwiper" pagination={{"clickable" : true}} >
        <SwiperSlide>
          <InfoCarrusel title={'Botox'} image={'https://www.hola.com/imagenes/estar-bien/20211216201392/botox-verdades-y-mentiras/1-31-641/botox-2t-t.jpg'} text={'Botox muy bueno'}/>
        </SwiperSlide>
        <SwiperSlide >Slide 2</SwiperSlide>
        <SwiperSlide >Slide 3</SwiperSlide>
        <SwiperSlide >Slide 4</SwiperSlide>
        <SwiperSlide >Slide 5</SwiperSlide>
        <SwiperSlide >Slide 6</SwiperSlide>
        <SwiperSlide >Slide 7</SwiperSlide>
        <SwiperSlide >Slide 8</SwiperSlide>
        <SwiperSlide >Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SecondCarrusel;
