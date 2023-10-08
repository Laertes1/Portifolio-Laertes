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
      <h3 className="talkToMe">Talk to me!</h3>
      <span className="form-box">
        <span className="form-box-boxName">
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="formEmail-input"
            placeholder="Write you name here"
          />
        </span>
        <span className="form-box-boxEmail">
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="formEmail-input"
            placeholder="Write you email here"
          />
        </span>
      </span>
      <span className="form-boxMessage">
        <label>Message</label>
        <textarea name="message" className="form-message" placeholder="Write you message here"
/>
      </span>
      <span className="form-boxSendEmail">
      <input
          type="submit"
          value="Send"
          className="form-boxSendEmail-sendMessage"
        />
      </span>
    </form>
  );
}
