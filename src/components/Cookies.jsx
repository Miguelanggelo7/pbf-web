import * as React from "react";
import { useState } from "react";
import "./Cookies.css";
import { motion, AnimatePresence } from "framer-motion";
import CookiesDialog from "./CookiesDialog";
import { makeStyles } from "@material-ui/core";

// ESTILOS
const useStyles = makeStyles({
    linkCookies: {
        textDecoration: 'underline',
        "&:hover": {
            cursor: 'pointer',
        },
    }
});

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

 const CloseButton = ({ close }) => (
  <button onClick={close} className="buttonCloseCookies" id="buttonClose">
    <svg fill="#fff" width="23" height="23" viewBox="0 0 23 23">
      <Path fill="#fff" d="M 3 16.5 L 17 2.5" />
      <Path fill="#fff" d="M 3 2.5 L 17 16.346" />
    </svg>
  </button>
);

const Cookies = () => {
  const [showCookies, setShowCookies] = useState(false);
  const [openC, setOpenC] = useState(false);
  const classes = useStyles();

  const remove = () => {
    setShowCookies(!showCookies);
  };

  return (
    <div className="container">
      {!showCookies ? (
        <ul className="ulCookies">
        <AnimatePresence initial={false}>
            <motion.li
              className="liCookies"
              positionTransition
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <CloseButton
                close={remove}
              />
              <p className="textCookies">Usamos cookies para mejorar tu experiencia, analizar nuestro tráfico de seguridad y marketing. Al visitar nuestro sitio web, aceptas nuestro uso de cookies. <a className={classes.linkCookies} onClick={() => setOpenC(true)}>Lee nuestra política de cookies</a></p>
            </motion.li>
        </AnimatePresence>
      </ul>
      ) : (
        null
      )}

        <CookiesDialog open={openC} onClose={() => setOpenC(false)} />

    </div>
  );
};

export default Cookies;