import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailJs.css";
export default function EmailJs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vktsxhg",
        "template_6514n6h",
        form.current,
        "HVaB_zEod9Nhulp7q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="emailForm">
      <h3 className="talkToMe">Fale comigo!</h3>
      <span className="form-box">
        <span className="form-box-boxName">
          <label>Nome</label>
          <input
            type="text"
            name="user_name"
            className="formEmail-input"
            placeholder="Escreva o seu nome aqui"
          />
        </span>
        <span className="form-box-boxEmail">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="formEmail-input"
            placeholder="Escreva o seu e-mail aqui"
          />
        </span>
      </span>
      <span className="form-boxMessage">
        <label>Menssagem</label>
        <textarea name="message" className="form-message" placeholder="Digite a sua menssagem aqui"
/>
      </span>
      <span className="form-boxSendEmail">
      <input
          type="submit"
          value="Enviar"
          className="form-boxSendEmail-sendMessage"
        />
      </span>
    </form>
  );
}
