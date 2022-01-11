import React from "react";
import { makeStyles } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./secondStyle.css";

SwiperCore.use([Pagination]);

// ESTILOS
const useStyles = makeStyles({
    box: {
      
    }
});

const SecondCarrusel = (props) => {
  const classes = useStyles();

  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} className="mySwiper" pagination={{"clickable" : true}}>
        <SwiperSlide >Slide 1</SwiperSlide>
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
