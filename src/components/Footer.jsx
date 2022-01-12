import React, {useState, useEffect} from "react";
import { IconButton, makeStyles, Box } from "@material-ui/core";
import LogoWomanSVG from "../assets/logoWoman.svg"
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

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
      width: '32vw',
      height: '200px',
      display: 'block',
      margin: 'auto',
      "@media (max-width: 650pt)": {
        height: '100px',
      }
    },
    divLocation: {
      marginTop: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      "@media (max-width: 650pt)": {
        marginTop: '10px',
      },
    },
    location: {
      marginLeft: '10pt',
      alignItems: 'center',
      color: '#fff',
      "@media (max-width: 650pt)": {
        fontSize: '8pt',
      }
    },
    flexDiv: {
      display: 'inline-flex',
    },
    infoFooter: {
      width: '34vw',
      textAlign: 'center',
      display: 'table',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    socialFooter: {
      width: '33vw',
      textAlign: 'center',
    },
    infoText: {
      color: "#fff",
      "@media (max-width: 650pt)": {
        fontSize: '8pt',
      },
    },
    div1: {
      marginTop: '80px',
      "@media (max-width: 650pt)": {
        marginTop: '20px',
      },
    },
    topIcons: {
      marginTop: '10%',
      marginBottom: '10%',
      "@media (max-width: 650pt)": {
        marginTop: '5%',
        marginBottom: '0',
      },
    },
    wsIcon: {
      marginRight: '50pt',
      "@media (max-width: 650pt)": {
        marginRight: '10pt',
      },
    },
    igIcon: {
      marginRight: '50pt',
      "@media (max-width: 650pt)": {
        marginRight: '10pt',
      },
    },
    iconColor: {
      color: '#fff',
    }
});
const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.containerFooter}>
      <div className={classes.flexDiv}>
        <div className={classes.infoFooter}>
          <div className={classes.div1}/>
          <a className={classes.infoText} href="#">Politica de privacidad</a>
          <div className={classes.div1}/>
          <a className={classes.infoText} href="#">Quienes somos</a>
        </div>
        <img className={classes.LogoFooter} src={LogoWomanSVG}/>
        <div className={classes.socialFooter}>
          <div className={classes.topIcons}>
            <IconButton className={classes.wsIcon} onClick={() => window.open('https://wa.me/+34976279085')}>
              <WhatsAppIcon fontSize={window.matchMedia("(min-width: 650pt)").matches ? "large" : "medium" } className={classes.iconColor}/>
            </IconButton>
            <IconButton className={classes.fbIcon} >
              <FacebookIcon fontSize={window.matchMedia("(min-width: 650pt)").matches ? "large" : "medium" } className={classes.iconColor}/>
            </IconButton>
          </div>
          <IconButton className={classes.igIcon} onClick={() => window.open('https://www.instagram.com/perfectbody.es/')}>
            <InstagramIcon fontSize={window.matchMedia("(min-width: 650pt)").matches ? "large" : "medium" } className={classes.iconColor}/>
          </IconButton>
          <IconButton className={classes.emIcon} onClick={() => window.open('mailto:perfectbodyfastesp@gmail.com')}>
            <EmailIcon fontSize={window.matchMedia("(min-width: 650pt)").matches ? "large" : "medium" } className={classes.iconColor}/>
          </IconButton>
        </div>
      </div>
      <div className={classes.divLocation}>
        <FmdGoodIcon className={classes.locationIcon}/>
        <a target="_blank" className={classes.location} href="https://maps.apple.com/?address=Camino%20de%20las%20Torres,%20109,%2050007%20Zaragoza,%20Espa%C3%B1a&ll=41.639900,-0.885900&_ext=EiYpTr0kdVPRREAxS14G3VKK7L85zJJK0XnSREBBOXCvnNon7L9QBA%3D%3D&t=m">Caminos de las Torres 109, 50007 Zaragoza, España</a>
      </div>
    </div>
  )
};

export default Header;
