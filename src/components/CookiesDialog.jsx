import React from "react";
import { makeStyles, Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// ESTILOS
const useStyles = makeStyles({
  dialog: {
    width: '80vw',
    maxWidth: '300pt',
    margin: 'auto',
  }
});

const CookiesDialog = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog disableScrollLock className={classes.dialog} open={props.open} onClose={props.onClose} fullWidth fullScreen={fullScreen}>
      <DialogTitle id="alert-dialog-title">
        {"POLÍTICA DE COOKIES"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat quae, qui natus obcaecati nulla, quibusdam doloribus nam dolorem expedita tempora unde mollitia voluptatum reiciendis officiis cumque id possimus vel!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CookiesDialog;
