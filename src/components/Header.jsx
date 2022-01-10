import React from "react";
import { makeStyles } from "@material-ui/core";
import LogoTextSVG from "../assets/logoText.svg"


// ESTILOS
const useStyles = makeStyles({
  headerBackground: {
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '10',
    backgroundColor: '#F6EEEE',
    height: '100px',
    color: '#fff',
    position: 'fixed',
    textAlign: 'center',
    "@media (max-width: 650pt)": {
      height: '130px',
    }
  },
  headerLogo: {
    paddingTop: '10px',
    display: 'block',
    margin: 'auto',
    marginBottom: '15pt',
  },
  headerButton: {
    textDecoration: 'none',
    fontSize: '15pt',
    color: '#000',
    marginLeft: '20pt',
    marginRight: '20pt',
    '&:hover': {
      color: '#83BAA6',
      cursor: 'pointer',
      transition: 'all .5s'
   },
   "@media (max-width: 650pt)": {
    marginLeft: '10pt',
    marginRight: '10pt',
    }
  },
  divisor: {
    margin: '5pt',
    "@media (min-width: 650pt)": {
      display: 'none'
    }
  }
});
const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.headerBackground}>
      <img className={classes.headerLogo} src={LogoTextSVG}/>
      <div className={classes.inlineDiv}> 
        <a className={classes.headerButton}>Faciales</a>
        <a className={classes.headerButton}>Corporales</a>
        <a className={classes.headerButton}>Muestras</a>
        <div className={classes.divisor} />
        <a className={classes.headerButton}>Sobre nosotros</a>
        <a className={classes.headerButton}>Agenda tu cita</a>
      </div>
    </div>
  )
};

export default Header;
