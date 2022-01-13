import React from "react";
import { makeStyles, Dialog, Card } from "@material-ui/core";

// ESTILOS
const useStyles = makeStyles({
  dialog: {
    width: '80vw',
    maxWidth: '300pt',
    margin: 'auto',
  }
});

const TermsDialog = (props) => {
  const classes = useStyles();

  return (
    <Dialog className={classes.dialog} open={true} onClose={handleClose} fullWidth maxWidth={'xs'}>
      prueba xD
      <Card>
        <Card.Body>
          xD
        </Card.Body>
      </Card>
    </Dialog>
  );
};

export default TermsDialog;
