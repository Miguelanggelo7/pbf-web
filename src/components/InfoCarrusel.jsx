import React from "react";
import { makeStyles } from "@material-ui/core";
// ESTILOS
const useStyles = makeStyles({
  infoContainer: {
    "@media (min-width: 650pt)": {
      display: 'inline-flex',
    },
  },
  space: {
    marginLeft: '100pt',
  },
  textStyle: {
    color: '#bbb',
  },
  contentImage: {
    width: '200pt',
    height: '200pt',
  },
  image: {
    borderRadius: '10pt',
  },
  title: {
    width: '100%',
    textTransform: 'uppercase',
    fontSize: '18pt',
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
