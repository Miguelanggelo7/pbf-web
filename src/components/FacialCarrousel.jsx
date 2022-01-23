import React, {useEffect, useState} from "react";
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

const SecondCarrusel = ({ faciales, ...props }) => {
  const classes = useStyles();


  const navigation = window.matchMedia("(min-width: 650pt)").matches ? true : false;
  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} navigation={navigation} className="mySwiper" pagination={{"clickable" : true}} >
        {
          faciales && faciales.map(item => (
            <SwiperSlide>
              <InfoCarrusel title={item.title} image={item.url} text={item.txt}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default SecondCarrusel;
