import React from "react";
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

import { faciales } from "../texts";
import armonizacion from "../assets/faciales/76cf9d8cc27a2728831eb17e3c784e6e.jpg";
import aumentoLabios from "../assets/faciales/9144b879c6c2d92d590a99a0d5396250.jpg";
import aumentoMenton from "../assets/faciales/7a48c78988ee43166a0ad34bd071c9cc.jpg";
import aumentoPomulos from "../assets/faciales/1e409e130d8041b8e97b66948c1078db.jpg";
import beautyEyes from "../assets/faciales/48795b6c65aa880b4cf2f3c4d0d6094c.jpg";
import botox from "../assets/faciales/44ffb28a6a4fdb2587d85d6990101a1d.jpg";
import cicatrices from "../assets/faciales/569c016d51fc91701c2d202a02c05601.jpg";
import lobulos from "../assets/faciales/cafef4efe1b3ff97f5bed7e956fccc2a.jpg";
import acne from "../assets/faciales/ba9886306264819a241c3aa39a1b8bcd.jpg";
import papada from "../assets/faciales/3bec8679120262c49439e7fd26621c44.jpg";
import tatuajes from "../assets/faciales/8e39339da0fcada527262ab7dcec3458.jpg";
import foxyEyes from "../assets/faciales/da0d808184275788ff7383302da62c7a.jpg";
import fullFace from "../assets/faciales/eedd47ff55207ec83fffb286eba471c6.jpg";
import hiperpigmentacion from "../assets/faciales/315eca3664ddb64cf6490d27aa628a2b.jpg";
import lifting from "../assets/faciales/a7e13c060115ddd81e0cc41a9230624f.jpg";
import nutricion from "../assets/faciales/46d32e1d3e40f8da2de2d701bab306df.jpg";
import rejuvenecimiento from "../assets/faciales/b8442914b893d9ec230f2e2ec799409b.jpg";
import rinomodelacion from "../assets/faciales/c8d0982a68fd93147d7b64ee659482ca.jpg";
import russianLips from "../assets/faciales/df6e9f0438c4571460fe2cdf2ea34e24.jpg";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

// ESTILOS
const useStyles = makeStyles({
    box: {
      
    }
});

const SecondCarrusel = ( props ) => {
  const classes = useStyles();


  const navigation = window.matchMedia("(min-width: 650pt)").matches ? true : false;
  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} navigation={navigation} className="mySwiper" pagination={{"clickable" : true}} >
        <SwiperSlide>
          <InfoCarrusel 
            title="Armonizaci??n facial" 
            image={armonizacion} 
            text={faciales["armonizaci??n facial"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Aumento de labios" 
            image={aumentoLabios} 
            text={faciales["aumento de labios"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Aumento de ment??n" 
            image={aumentoMenton} 
            text={faciales["aumento de ment??n"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Aumento de p??mulos" 
            image={aumentoPomulos} 
            text={faciales["aumento de pomulos"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Beauty Eyes" 
            image={beautyEyes} 
            text={faciales["beauty eyes"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Botox" 
            image={botox} 
            text={faciales["botox"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Correci??n de cicatrices" 
            image={cicatrices} 
            text={faciales["correci??n de cicatrices"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Correci??n de l??bulos rasgados" 
            image={lobulos} 
            text={faciales["correci??n de l??bulos rasgados"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Eliminaci??n de acn??" 
            image={acne} 
            text={faciales["eliminaci??n de acn??"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Eliminaci??n de papada" 
            image={papada} 
            text={faciales["eliminaci??n de papada"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Eliminaci??n de tatuajes" 
            image={tatuajes} 
            text={faciales["eliminaci??n de tatuajes"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Foxy eyes" 
            image={foxyEyes} 
            text={faciales["foxy eyes"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Full face" 
            image={fullFace} 
            text={faciales["full face"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Hiperpigmentaciones cut??nea: melasma" 
            image={hiperpigmentacion} 
            text={faciales["hiperpigmentaciones cut??nea: melasma"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Lifting sin cirug??a con hilos de ??ltima generaci??n" 
            image={lifting} 
            text={faciales["lifting sin cirug??a con hilos de ??ltima generaci??n"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Nutrici??n facial anti aging" 
            image={nutricion} 
            text={faciales["nutrici??n facial anti aging"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Rejuvenecimiento de cuello y escote sin cirug??a" 
            image={rejuvenecimiento} 
            text={faciales["rejuvenecimiento de cuello y escote sin cirug??a"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Rinomodelaci??n" 
            image={rinomodelacion} 
            text={faciales["rinomodelaci??n"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Russian Lips" 
            image={russianLips} 
            text={faciales["russian lips"]}
          />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default SecondCarrusel;
