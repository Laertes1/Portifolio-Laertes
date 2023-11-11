import React from "react";
import "../NavBar/NavBar.css";
/*-----Icons-----*/
import lua from "../../assets/icons/noBackGround/moon.svg";
import logo from "../../assets/icons/noBackGround/ns..svg";
/*-----React Link-----*/
import { Link } from "react-router-dom";
/*-----Scroll To Top-----*/
import ScrollToTop from "../scrollToTop/scrollToTop";
/*-----React Scroll-----*/
var Scroll = require("react-scroll");
const ScrollLink = Scroll.Link;

export default function NavBar(props) {
  
  const menuShow = () => {
    const menuMobile = document.getElementById("menuHamburguer");
    menuMobile.classList.toggle("active");

  };
  
  return (
    <>
      {/*--------Nav Bar-----*/}
      <nav>
        <section className="navBar-containerPrincipal">
          <section className="navBar-containerPrincipal-cont1">
            <div className="box1">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <span className="testea" >
              {" "}
              <input id="checkbox" type="checkbox" onClick={menuShow}/>
              <label class="toggle" for="checkbox">
                <div id="bar1" class="bars"></div>
                <div id="bar2" class="bars"></div>
                <div id="bar3" class="bars"></div>
              </label>
            </span>

            <section className="navBar-box2">
              <div className="navBar-box2-box1">
                <ScrollLink
                  to={props.to}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-200}
                  duration={500}
                  onClick={ScrollToTop}
                >
                  <Link to="/" className="Link">
                    <p className="navBar-p p1">{props.value1}</p>
                  </Link>
                </ScrollLink>

                <ScrollLink
                  to={props.to2}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  className="navBar-p p2"
                >
                  {props.value2}
                </ScrollLink>
                <ScrollLink
                  to={props.to3}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  className="navBar-p p3"
                >
                  {props.value3}
                </ScrollLink>

                <ScrollLink
                  to={props.to4}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  className="navBar-p p4"
                >
                  {props.value4}
                </ScrollLink>
              </div>
              <div className="box2 box1">
                <img src={lua} alt="icone da lua" className="lua" />
              </div>
            </section>
          </section>
          <section className="menuHamburguer" id="menuHamburguer">
            <ScrollLink
              to={props.to}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-200}
              duration={500}
              onClick={ScrollToTop}
            >
              <Link to="/" className="Link">
                <p className="navBar-p-hamburguer p1">{props.value1}</p>
              </Link>
            </ScrollLink>

            <ScrollLink
              to={props.to2}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p-hamburguer p2"
            >
              {props.value2}
            </ScrollLink>
            <ScrollLink
              to={props.to3}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p-hamburguer p3"
            >
              {props.value3}
            </ScrollLink>

            
            <ScrollLink
              to={props.to4}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p-hamburguer p4"
            >
              <Link to="/" className="Link">
              <p className="navBar-p-hamburguer p1">{props.value4}</p>
              </Link>
            </ScrollLink>
              
            <div className="box2 box1">
              <img src={lua} alt="icone da lua" className="lua" />
            </div>
          </section>
        </section>
      </nav>
    </>
  );
}
