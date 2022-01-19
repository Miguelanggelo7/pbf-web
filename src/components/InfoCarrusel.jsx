import React from "react";
import { makeStyles } from "@material-ui/core";
// ESTILOS
const useStyles = makeStyles({
  infoContainer: {
    "@media (min-width: 800pt)": {
      display: 'inline-flex',
    },
  },
  space: {
    marginLeft: '20pt',
  },
  textStyle: {
    color: '#bbb',
  },
  contentImage: {
    width: '200pt',
    minWidth: '200pt',
    minHeight: '200pt',
    height: '200pt',
    marginLeft: '60pt',
    "@media (max-width: 800pt)": {
      width: '100%',
      margin: 'auto',
      marginLeft: '0pt',
    },
    backgroundSize: 'cover',
  },
  image: {
    borderRadius: '10pt',
    width: '200pt',
    minWidth: '200pt',
    height: '200pt',
    minHeight: '200pt',
    backgroundSize: 'cover',
    "@media (max-width: 800pt)": {
      margin: 'auto',
    },
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '18pt',
  },
  text: {   
    "@media (min-width: 800pt)": {
      marginRight: '60pt',
    },
    maxWidth: '500pt',
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
