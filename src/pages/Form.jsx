import React, {useState} from 'react';
import { makeStyles, TextField, Button, CircularProgress } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MuiPhoneNumber from 'material-ui-phone-number';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import TermsDialog from '../components/TermsDialog';
import { useSnackbar } from "notistack"; 
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  backIcon: {
    marginTop: '20pt',
    marginLeft: '20pt',
    left: '0',
    position: 'absolute',
    color: '#000',
    '&:hover': {
      cursor: 'pointer',
      color: '#000',
    },
    '&:active': {
      cursor: 'pointer',
      color: '#000',
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
  termsText: {
    fontSize: '10pt',
  },
  linkTerms: {
    color: '#000',
    textDecoration: 'underline',
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
  },
  dialog: {
    width: '80vw',
    maxWidth: '300pt',
    margin: 'auto',
  },
});

const Form = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [tlf, setTlf] = useState("+34");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const acceptTerms = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  const sendEmail = async() => {
    if(name === "" || tlf === "+34" || tlf === "" || tlf === "+" || email === "" || message === ""){
      return enqueueSnackbar("Debe rellenar todos los campos", {
        variant: "warning"
      });
    }

    setLoading(true);

    const data = {
      name,
      tlf,
      email,
      message
    };

    try {
      const res = await fetch("https://pbf-api.herokuapp.com/api/message/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if(!res.ok) {
        setLoading(false);
        return enqueueSnackbar("Se ha producido un error al enviar formulario", {
          variant: "error"
        });
      };
      
      setLoading(false);

      const interval = setInterval(() => {
        history.push("/");
        clearInterval(interval);
      }, 1500);

      return enqueueSnackbar("Formulario enviado correctamente, redirigiendo a la pantalla principal", {
        variant: "success"
      });

    } catch (err) {
      setLoading(false);
      return enqueueSnackbar("Se ha producido un error al enviar formulario", {
        variant: "error"
      });
    }
  };
  

  const handleChange = (event) => {
    if(!event.target) setTlf(event);
    else if (event.target.id === "name") setName(event.target.value);
    else if (event.target.id === "email") setEmail(event.target.value);
    else if (event.target.id === "message") setMessage(event.target.value);
  }

  return (
    <div >
      <Link to="/" >
        <ArrowBackIosIcon className={classes.backIcon}/>
      </Link>
      <br/>
      <p className={classes.titleText}>Agenda tu cita</p>
      <div className={classes.inputContainer}>
        <TextField color="secondary" placeholder='Ingresa tu nombre' id="name" label="Nombre Completo" variant="standard" className={classes.inputForm} onChange={handleChange}/>
        <br/>
        <MuiPhoneNumber style={{marginTop: '20pt', }} label="Teléfono" color="secondary" className={classes.inputForm} defaultCountry={'es'} id="tlf" onChange={handleChange} lang="Spanish"/>
        <br/>
        <TextField color="secondary" id="email" placeholder='Ingresa tu email' label="Email" variant="standard" className={classes.inputForm} onChange={handleChange} />
        <br/>
        <TextField color="secondary" id="message" rows={4} multiline placeholder='Tu descripción aquí...' label="Descripción de tu cita" variant="standard" className={classes.inputForm} onChange={handleChange}/>
        <br/>
        <div className={classes.terms}>
          <Checkbox 
            className={classes.checkStyle}
            style ={{
              color: '#83BAA6'
            }}
            onChange={acceptTerms}
          />
          <p className={classes.termsText}>Acepto la <a className={classes.linkTerms} onClick={() => setOpen(true)}>política de privacidad y de protección de datos</a></p>
        </div>
        <br/>
        <Button disabled={!isChecked || loading} className={classes.buttonForm} onClick={sendEmail}>
          {loading ? "ENVIANDO" : "ENVIAR"}
          {loading && <CircularProgress size="15pt" color="inherit" style={{ marginLeft: "10pt" }}/>}
        </Button>

        <TermsDialog open={open} onClose={() => setOpen(false)} />


      </div>
    </div>
  );
}

export default Form;
