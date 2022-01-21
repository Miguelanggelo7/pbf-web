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

const ThirdCarrusel = (props) => {
  const classes = useStyles();
  const [corporales, setCorporales] = useState(null);

  useEffect(() => {
    const getData = async() => {
      const response = await fetch("https://pbf-api.herokuapp.com/api/corporales", {
        method: "GET",
      });

      if (!response.ok) {
        console.log("error")
      }

      const data = await response.json();
      setCorporales(data);
    }

    getData();
  }, []);

  const navigation = window.matchMedia("(min-width: 650pt)").matches ? true : false;
  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} navigation={navigation} className="mySwiper" pagination={{"clickable" : true}} >
        {
          corporales && corporales.map(item => (
            <SwiperSlide>
              <InfoCarrusel title={item.title} image={item.url} text={item.txt}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ThirdCarrusel;
