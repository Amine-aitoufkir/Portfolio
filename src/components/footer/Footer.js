import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("© 2025 – Réalisé par ")}{" "}
          <a
            href="mailto:atmine7@gmail.com"
            className="footer-link"
          >
            Amine Ait Oufkir
          </a>
          {emoji(" | Thème personnalisé ")}{" "}
          <a
            href="https://github.com/Amine-aitoufkir"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            AYTO
          </a>
        </p>
      </div>
    </Fade>
  );
}
