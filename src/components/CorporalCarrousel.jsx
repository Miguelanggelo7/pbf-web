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

import { corporales } from "../texts";
import bioestimuladores from "../assets/corporales/a1ff5dc79de7aa96505eef6114b06d5e.jpg";
import carboxiterapia from "../assets/corporales/10f9f2ff1c485030910e27e1ab5af28b.jpg";
import cavitacion from "../assets/corporales/bb5b0e22842a263792845bf9aa4f7d5f.jpg";
import depilacion from "../assets/corporales/d0d25c2b1f1bd33c0697289bae0329aa.jpg";
import electroestimulacion from "../assets/corporales/a9eaf6e84339c20dbcb09d90de25d5df.jpg";
import escleroterapia from "../assets/corporales/cea9aab2a40dbce573a08e1fd651893a.jpg";
import hilosTensores from "../assets/corporales/8e4f25a2bf1c57d24e600220618b3882.jpg";
import liftingBrazos from "../assets/corporales/6fb0ef940fb26a0825bcda1b735edc4a.jpg";
import liftingPiernas from "../assets/corporales/340cd25dfb8a699e6b9efebd40e3d5d4.jpg";
import lpg from "../assets/corporales/b2a3e7e8b733dfed88286612a7f481c8.jpg";
import mesoterapia from "../assets/corporales/d2f4af3f4708a3bf3b52a26fe0f8df0d.jpg";
import presoterapia from "../assets/corporales/54fd3716a2dbf4e6e1b54a1143c31042.jpg";
import radiofrecuencia from "../assets/corporales/fdc43401bc524fa0f68e1a749a66b140.jpg";
import rejuvenecimientoManos from "../assets/corporales/fd3dded16ef1a54adc6e141213ccd3a8.jpg";
import rejuvenecimientoVaginal from "../assets/corporales/16e06cc0c40eddacaba2f1fec208db99.jpg";
import gluteos from "../assets/corporales/018b3e7a32f834531c4fcac371df7582.jpg";
import alopecia from "../assets/corporales/f0e5ddbe792126fac662dd2150f3cd00.jpg";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

// ESTILOS
const useStyles = makeStyles({
    box: {
      
    }
});

const ThirdCarrusel = (   props ) => {
  const classes = useStyles();

  const navigation = window.matchMedia("(min-width: 650pt)").matches ? true : false;
  
  return (
    <div className={classes.box}>
      <Swiper pagination={true} navigation={navigation} className="mySwiper" pagination={{"clickable" : true}} >
        <SwiperSlide>
          <InfoCarrusel 
            title="Bioestimuladores corporales" 
            image={bioestimuladores} 
            text={corporales["bioestimuladores corporales"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Carboxiterapia" 
            image={carboxiterapia} 
            text={corporales["carboxiterapia"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Cavitación" 
            image={cavitacion} 
            text={corporales["cavitación"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Depilación corporal" 
            image={depilacion} 
            text={corporales["depilación corporal"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Electroestimulación" 
            image={electroestimulacion} 
            text={corporales["electroestimulación"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Escleroterapia" 
            image={escleroterapia} 
            text={corporales["escleroterapia"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Hilos Tensores" 
            image={hilosTensores} 
            text={corporales["hilos tensores"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Lifting de brazos sin cirugía" 
            image={liftingBrazos} 
            text={corporales["lifting de brazos sin cirugía"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Lifting de piernas sin cirugía" 
            image={liftingPiernas} 
            text={corporales["lifting de piernas sin cirugía"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="LPG o Lipomassage" 
            image={lpg} 
            text={corporales["lpg o lipomassage"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Mesoterapia" 
            image={mesoterapia} 
            text={corporales["mesoterapia"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Presoterapia" 
            image={presoterapia} 
            text={corporales["presoterapia"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Radiofrecuencia Corporal" 
            image={radiofrecuencia} 
            text={corporales["radiofrecuencia corporal"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Rejuvenecimiento de manos" 
            image={rejuvenecimientoManos} 
            text={corporales["rejuvenecimiento de manos"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Rejuvenecimiento vaginal sin cirugía" 
            image={rejuvenecimientoVaginal} 
            text={corporales["rejuvenecimiento vaginal sin cirugía"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Remodelado de glúteos" 
            image={gluteos} 
            text={corporales["remodelado de glúteos"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <InfoCarrusel 
            title="Tratamiento de alopecia" 
            image={alopecia} 
            text={corporales["tratamiento de alopecia"]}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThirdCarrusel;
