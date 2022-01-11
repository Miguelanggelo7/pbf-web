import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import LogoWomanSVG from "../assets/logoWoman.svg"


// ESTILOS
const useStyles = makeStyles({
    containerFooter: {
      width: '100%',
      height: '300px',
      background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
      color: '#fff',
      "@media (max-width: 650pt)": {
        height: '150px',
      }
    },
    LogoFooter: {
      width: '50%',
      height: '200px',
      display: 'block',
      margin: 'auto',
      "@media (max-width: 650pt)": {
        height: '100px',
      }
    },
});
const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.containerFooter}>
      <img className={classes.LogoFooter} src={LogoWomanSVG}/>
    </div>
  )
};

export default Header;
