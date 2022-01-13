import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core";
import LogoTextSVG from "../assets/logoText.svg";
import { animateScroll as scroll } from 'react-scroll';
import { Link as LinkS } from 'react-scroll';

// ESTILOS
const useStyles = makeStyles({
  headerBackground: props => ({
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '10',
    backgroundColor: props.backgroundColor,
    height: '100px',
    color: '#fff',
    position: 'fixed',
    textAlign: 'center',
    boxShadow: props.boxShadow,
    transition: 'all .5s',
    "@media (max-width: 650pt)": {
      height: '120px',
    }
  }),
  headerLogo: {
    paddingTop: '10px',
    display: 'block',
    margin: 'auto',
    marginBottom: '15pt',
  },
  headerButton: {
    textDecoration: 'none',
    color: '#000',
    marginLeft: '23pt',
    marginRight: '23pt',
    textTransform: 'uppercase',
    '&:hover': {
      color: '#8E7AA7',
      cursor: 'pointer',
      transition: 'all .5s'
   },
   "@media (max-width: 650pt)": {
    marginLeft: '15pt',
    marginRight: '15pt',
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
  const [scrollNav, setScrollNav] = useState("#ffffff50");
  const [shadowNav, setShadowNav] = useState("none");
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav("#fff");
      setShadowNav("1px 1px 1px 1px rgba(50, 50, 0, 0.5)");
    } else {
      setScrollNav("#ffffff50");
      setShadowNav("none");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const styleProps = {backgroundColor: scrollNav, boxShadow: shadowNav}
  const classes = useStyles(styleProps);

  return (
    <div className={classes.headerBackground}>
      <img className={classes.headerLogo} src={LogoTextSVG}/>
      <div className={classes.inlineDiv}> 
        <LinkS smooth={true} duration={1000} spy={true} exact='true' offset={-120} to="faciales" className={classes.headerButton}>Faciales</LinkS>
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
