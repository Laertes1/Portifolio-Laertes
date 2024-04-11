import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailJs.css";

// Modal para quando o emaill for enviado
import ModalSendMessage from "../messageOfSendEmail/modalSendMessage"
// Modal para quando o emaill nao for enviado
import ModalNotSendMessage from "../messageOfSendEmail/modalNoSendEmail"
export default function EmailJs() {
  const [modalEmailSend, setModalEmailsend] = useState(false);
  const [modalEmailNotSend, setModalEmailNotSend] = useState(false);
  // Apos tres (3) segundos com  esses modais abertos ele ira fechar altomaticamente 
  if (modalEmailSend) {
    setTimeout(() => {
      setModalEmailsend(false)
    }, "3000");
  }
  if (modalEmailNotSend) {
    setTimeout(() => {
      setModalEmailNotSend(false)
    }, "3000");
  }
  //-------------------------------------------------------//

  // Ligação com a api de email (emailJs).
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
        () => {
          // Abrir o modal
          setModalEmailsend(true);

          const limparCampo = (id) =>{ document.getElementById(id).value = ""};
          limparCampo("nameInput");
          limparCampo( "emailInput")
          limparCampo("messageInput")

        },
        (error) => {
          console.log(error.text);
          setModalEmailNotSend(true);
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
            id="nameInput"
          />
        </span>
        <span className="form-box-boxEmail">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="formEmail-input"
            placeholder="Escreva o seu e-mail aqui"
            id="emailInput"
          />
        </span>
      </span>
      <span className="form-boxMessage">
        <label>Menssagem</label>
        <textarea name="message" className="form-message" placeholder="Digite a sua menssagem aqui"
        id="messageInput"
        />
      </span>
      <span className="form-boxSendEmail">
        <input
          type="submit"
          value="Enviar"
          className="form-boxSendEmail-sendMessage"
        />
      </span>
      {/* Modal para quando o email for enviado corretamente */}
      {modalEmailSend && <ModalSendMessage setModalClose={setModalEmailsend} />}
      {/* Modal para quando o email não for enviado corretamente */}
      {modalEmailNotSend && <ModalNotSendMessage setModalClose={setModalEmailNotSend} />}
    </form>
  );
}
