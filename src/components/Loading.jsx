import React from "react";
import { makeStyles } from "@material-ui/core";
import loadingLogo from "../assets/logoloading.png";
import backgroundImage from "../assets/backgroundpbf.jpg";
import './loading.css';

// ESTILOS
const useStyles = makeStyles({
  infoContainer: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
  },
  image: {
    display: 'block',
    margin: 'auto',
    paddingTop: '10%',
    "@media (max-width: 650pt)": {
      paddingTop: '30%',
    },
  }
});
const Loading = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.infoContainer}>
      <div className="logoLoadingg">
        <img className={classes.image} src={loadingLogo} alt="cargando..."/>
      </div>
    </div>
  )
};

export default Loading;
