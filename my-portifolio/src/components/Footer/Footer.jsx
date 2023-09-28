import React from "react";
import "./Fotter.css";
import "../root/root.css";
/*----Buttons----*/
import GitHubIcon from "../Buttons/GitHubIcon/GitHubIcon";
import LinkedinIcon from "../Buttons/LinkedinIcon/LinkedinIcon";
import Email from "../Buttons/Email/Email";
/*-----Icons----*/
import ArrowUp from "../../assets/icons/noBackGround/Icon=arrow-up, Theme=dark, State=default.svg";

export default function Footer() {
  /*----Scrollar Para Cima-----*/
  const scroolToTop = () =>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <footer>
        <section className="footer-container1">
          <div className="footer-container1-box1">
            <h5 className="footer-container1-box1-title">Let’s connect</h5>
            <p className="footer-container1-box1-paragraph">
              Shoot me email to chat about my work or just like to say hey{" "}
            </p>
          </div>
          <div className="footer-container1-box2">
            <span className="footer-container1-box2-buttons">
              <GitHubIcon />
              <LinkedinIcon />
              <Email />
            </span>
            <span
              className="footer-container1-box2-backToTop"
              onClick={scroolToTop}
            >
              <p className="footer-container1-box2-backToTop-paragraph">
                Back To Top
              </p>
              <img
                src={ArrowUp}
                alt=""
                className="footer-container1-box2-backToTop-arrowDown"
              />
            </span>
          </div>
        </section>
        <section className="footer-container2">
          <p className="footer-container2-paragraph">
            © Coded by Laertes Angelo 💜{" "}
          </p>
        </section>
      </footer>
    </>
  );
}
