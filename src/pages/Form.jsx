import React from 'react';
import { makeStyles, TextField } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles({
  backIcon: {
    marginTop: '20pt',
    marginLeft: '20pt',
    left: '0',
    position: 'absolute',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  titleText: {
    marginTop: '50pt',
    fontSize: '30pt',
    background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textTransform: 'uppercase',
  },
  inputContainer: {
    width: '80vw',
    margin: 'auto',
  },
  inputForm: {
    width: '300pt',
    marginTop: '20pt',
    "@media (max-width: 650pt)": {
      width: '100%',
    }
  }
});

function Home() {
  const classes = useStyles();
  return (
    <div >
      <ArrowBackIosIcon className={classes.backIcon}/>
      <br/>
      <p className={classes.titleText}>Agenda tu cita</p>
      <div className={classes.inputContainer}>
        <TextField color="secondary" placeholder='Ingresa tu nombre' label="Nombre Completo" variant="standard" className={classes.inputForm}/>
        <br/>
        <MuiPhoneNumber style={{marginTop: '20pt'}} label="Teléfono" color="secondary" className={classes.inputForm} defaultCountry={'es'} />
        <br/>
        <TextField color="secondary" placeholder='Ingresa tu email' label="Email" variant="standard" className={classes.inputForm}/>
        <br/>
      </div>
    </div>
  );
}

export default Home;
