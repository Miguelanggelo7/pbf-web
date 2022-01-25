import React from "react";
import { makeStyles } from "@material-ui/core";
// ESTILOS
const useStyles = makeStyles({
  infoContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    "@media (min-width: 800pt)": {
      display: 'inline-flex',
    },
    "@media (max-width: 800pt)": {
      minWidth: '100%',
    },
  },
  space: {
    marginLeft: '20pt',
  },
  textStyle: {
    color: '#bbb',
    "@media (max-width: 800pt)": {
      maxWidth: '95vw',
      margin: 'auto',
    },
  },
  contentImage: {
    width: '200pt',
    minWidth: '300pt',
    minHeight: '150pt',
    height: '200pt',
    marginLeft: '60pt',
    "@media (max-width: 800pt)": {
      width: '100%',
      margin: 'auto',
      marginLeft: '0pt',
    },
    backgroundSize: 'cover',
    "@media (min-width: 800pt)": {
      filter: 'drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.5))',
    },
  },
  image: {
    borderRadius: '10pt',
    width: '200pt',
    minWidth: '300pt',
    height: '200pt',
    minHeight: '150pt',
    backgroundSize: 'cover',
    "@media (max-width: 800pt)": {
      width: '100%',
      minWidth: '100%',
      margin: 'auto',
      borderRadius: '0pt',
    },
    
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '18pt',
    textAlign: 'center',
  },
  text: {   
    "@media (min-width: 800pt)": {
      marginRight: '60pt',
      marginTop: '-20pt',
    },
    maxWidth: '500pt',
    minHeight: '300pt',
    "@media (max-width: 800pt)": {
      minHeight: '290pt',
      margin: 'auto',
    },
  }
});
const InfoCarrusel = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.infoContainer}>
      <div className={classes.contentImage}>
        <img className={classes.image} src={props.image}/>
      </div>
      <div className={classes.space}/>
      <div className={classes.text}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.textStyle}>{props.text}</p>
      </div>
    </div>
  )
};

export default InfoCarrusel;
