import React from "react";
import "../../Buttons/buttons.css";
import Emaill from "../../../assets/icons/black/email.svg";

export default function Email() {
  return (
    <>
      <a
        className="a-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="box-Icons">
          <img src={Emaill} alt="Entrar em contato" className="Icons" />
        </span>
      </a>
    </>
  );
}
