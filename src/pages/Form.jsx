import React, {useState} from 'react';
import { makeStyles, TextField, Button } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MuiPhoneNumber from 'material-ui-phone-number';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";

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
    },
  },
  terms: {
    display: 'inline-flex',
    marginTop: '20pt',
  },
  termsText: {
    fontSize: '10pt',
  },
  linkTerms: {
    color: '#000'
  },
  buttonForm: {
    background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
    color: '#fff',
    width: '200pt',
    margin: 'auto',
    marginTop: '10pt',
    marginBottom: '20pt',
    '&:hover': {
      background: 'linear-gradient(270deg, #9082BC 0%, rgba(144, 130, 188, 0) 100%), #83BAA6',
      opacity: '.8',
      transition: 'all .5s',
      color: '#fff',
    },
  }
});

function Home() {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const acceptTerms = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  return (
    <div >
      <Link to="/" >
        <ArrowBackIosIcon className={classes.backIcon}/>
      </Link>
      <br/>
      <p className={classes.titleText}>Agenda tu cita</p>
      <div className={classes.inputContainer}>
        <TextField color="secondary" placeholder='Ingresa tu nombre' label="Nombre Completo" variant="standard" className={classes.inputForm}/>
        <br/>
        <MuiPhoneNumber style={{marginTop: '20pt', }} label="Teléfono" color="secondary" className={classes.inputForm} defaultCountry={'es'} />
        <br/>
        <TextField color="secondary" placeholder='Ingresa tu email' label="Email" variant="standard" className={classes.inputForm}/>
        <br/>
        <TextField color="secondary" rows={4} multiline placeholder='Tu descripción aquí...' label="Descripción de tu cita" variant="standard" className={classes.inputForm}/>
        <br/>
        <div className={classes.terms}>
          <Checkbox 
            className={classes.checkStyle}
            style ={{
              color: '#83BAA6'
            }}
            onChange={acceptTerms}
          />
          <p className={classes.termsText}>Acepto la <a className={classes.linkTerms} href="#">política de privacidad y de protección de datos</a></p>
        </div>
        <br/>
        <Button disabled={!isChecked} className={classes.buttonForm}>
          ENVIAR
        </Button>
      </div>
    </div>
  );
}

export default Home;
