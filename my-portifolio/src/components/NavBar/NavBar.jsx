import React from "react";
import "../NavBar/NavBar.css";
/*-----Icons-----*/
import lua from "../../assets/icons/noBackGround/moon.svg";
import logo from "../../assets/icons/noBackGround/ns..svg";
/*-----React Link-----*/
import { Link } from "react-router-dom";
/*-----Scroll To Top-----*/
import ScrollToTop from "../scrollToTop/scrollToTop"
/*-----React Scroll-----*/
var Scroll = require('react-scroll');
const ScrollLink = Scroll.Link;
export default function NavBar() {
   
  return (
    <>
      {/*--------Nav Bar-----*/}
      <nav>
        <section className="navBar-containerPrincipal">
        <div className="box1">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <section className="box2">
          <div className="box2-box1">
            
            <ScrollLink
              to="Home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              onClick={ScrollToTop}
            >
              <Link to="/" className="Link">
              <p className="navBar-p p1">Home</p>
              </Link>
            </ScrollLink>
            
            
            <ScrollLink
              to="Projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p p2"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="AboutMe"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p p3"
            >
              About Me
            </ScrollLink>            

            <ScrollLink
              to="formEmail"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p p4"
            >
              Talk to me
            </ScrollLink>
          </div>
          <div className="box2 box1">
            <img src={lua} alt="icone da lua" className="lua" />
          </div>
        </section>
        </section>
      </nav>
    </>
  );
}
