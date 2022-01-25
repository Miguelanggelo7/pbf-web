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

const TermsDialog = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Dialog disableScrollLock className={classes.dialog} open={props.open} onClose={props.onClose} fullWidth fullScreen={fullScreen}>
      <DialogTitle id="alert-dialog-title">
        {"POLÍTICA DE PRIVACIDAD"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        A través del presente aviso, Perfect Body Fast informa a los usuarios del sitio web ‘www.perfectbodyfast.es’, en cumplimiento del artículo 5 de la Ley 15/1999, de 13 de diciembre, de Protección de datos, acerca de su política de protección de datos personales.
Perfect Body Fast figura inscrita en el Registro Mercantil de Valladolid al tomo 8684 Libro 5971, folio 208 , hoja número V-122001, con C.I.F. B-67986802

Perfect Body Fast hace accesibles desde este sitio web a través de enlaces de hipertexto. La inclusión de vínculos con otros sitios web no implica la aprobación de sus contenidos por parte de Perfect Body Fast ni la existencia de ningún tipo de asociación entre Perfect Body Fast y sus titulares.

La copia, reproducción, transmisión, distribución o publicación de los contenidos de este sitio web están prohibidos sin el previo consentimiento expreso de Perfect Body Fast Se permite la reproducción y almacenamiento temporal de los contenidos del sitio web en tanto ello sea estrictamente necesario para el uso y visualización del sitio web desde un ordenador personal.

El usuario puede acceder a la información del sitio web sin necesidad de proporcionar ningún dato de carácter personal. No obstante, en el supuesto de que el usuario realizara alguna consulta por correo electrónico, para lo cual deberá rellenar un formulario, la información de carácter personal facilitada por usted en éste, será incorporada y tratada en un fichero cuyo destinatario y resposable es Perfect Body Fast , con domicilio en Valladolid, C/ Marqués de Dos Aguas 7, 3D – 46002 Valladolid y cuya finalidad es facilitarle la información por usted solicitada, así como beneficiarse de las ventajas asociadas a la cumplimentación del mismo. Perfect Body Fast actúa como responsable del fichero, con el mismo domicilio señalado anteriormente, con la finalidad de hacerle llegar ofertas comerciales ya sea por correo o través de canales electrónicos.

Al rellenar el formulario de la web, el usuario autoriza expresamente la suscripción a nuestra newsletter con la finalidad de enviarle información publicitaria y promocional, que pueda resultar de su interés, consintiendo el envío de dicha información por cualquier medio, incluidos medios electrónicos.

En cumplimiento de lo dispuesto en la Ley 34/2002 de 11 de julio, de Servicios de Sociedad de la Información y de Comercio Electrónico los usuarios podrán revocar el consentimiento prestado en cualquier momento a través del enlace Unsubscribed que aparece en la parte inferior de la newsletter".

El interesado podrá ejercitar los derechos de acceso, rectificación, cancelación o baja y oposición mediante escrito dirigido a Perfect Body Fast , con domicilio en Valladolid, C/ Marqués de Dos Aguas 7, 3D – 46002 Valladolid o directamente remitiendo un email a la dirección dpd@dorsia.es. La solicitud deberá contener nombre, apellidos del interesado, copia del DNI y, en los casos que se admita, de la persona que lo represente, así como documento acreditativo de la representación, petición en que se concreta la solicitud, domicilio a efectos de notificaciones, fecha y firma del solicitante y documentos acreditativos de la petición que formula. Si la solicitud no reúne los requisitos especificados se requerirá su subsanación. Respecto al derecho de acceso, únicamente se denegará cuando la solicitud sea formulada por persona distinta del afectado. No se exigirá contraprestación alguna por el ejercicio de los derechos.


Perfect Body Fast ha adoptado las medidas de índole técnica y organizativa necesarias que garanticen la seguridad de los datos y eviten su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, ya provengan de la acción humana o del medio físico o natural. Se adoptan medidas de índole técnico y organizativas que persiguen alcanzar los objetivos básicos en materia de seguridad, tales como la confidencialidad, entendida como la limitación de acceso a la información por personas no autorizadas; la integridad, entendida como el mantenimiento de información fiable y con calidad, y la disponibilidad, entendida como la garantía de acceso al sistema de información por solicitud de un usuario autorizado.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
