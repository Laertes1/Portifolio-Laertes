import React from "react";
import "./index.css";
/*-----Components-----*/
import Projects from "../../components/Projects/projects";
import EmailJs from "../../components/Emailjs/EmailJs"
import Socket from "../../components/Socket/Socket"
/*-----Images-----*/
import Image from "../../assets/Vector.svg";
import MyPhoto from "../../assets/minhaFoto.jpg";
/*------Images From Projects-----*/
import Calculator from "../../assets/Calculadora.png";
/*----Icons----*/
import ArrowDown from "../../assets/icons/noBackGround/Icon=arrow-down, Theme=dark, State=default.svg";
/*-----Icons------*/
import js from "../../assets/icons/noBackGround/Icon=javascript, Theme=dark, State=default.svg";
import react from "../../assets/icons/noBackGround/Icon=react, Theme=dark, State=default.svg";
import css from "../../assets/icons/noBackGround/Icon=css, Theme=dark, State=default.svg";
import html from "../../assets/icons/noBackGround/Icon=html, Theme=dark, State=default.svg";
/*-----Buttons-----*/
import ButtonGitHub from "../../components/Buttons/GitHubIcon/GitHubIcon";
import ButtonLinkedin from "../../components/Buttons/LinkedinIcon/LinkedinIcon";
/*-----React Link-----*/
import { Link } from "react-router-dom";
/*-----React Scroll-----*/
import { Element } from "react-scroll";
/*-----Scroll To Top-----*/
import ScrollToTop from "../../components/scrollToTop/scrollToTop"
/*------React Scroll-----*/
const Scroll = require('react-scroll');
const ScrollLink = Scroll.Link;
export default function Index() {

  return (
    <>
      {/*-----Home----*/}
      <main>
        <section className="section-pincipal">
          <Element className="main-sec1" name="Home">
            <div className="main-sec1-div1">
              <h3 className="title">Hello, i am Laertes</h3>
              <h4 className="main-sec1-div1-h4">Full-Stack Developer</h4>
            </div>
            <div className="main-sec1-div2">
              <p className="main-sec1-div2-paragraph">
                Hello! I'm Laertes, a full-stack developer with solid experience
                in creating web applications.{" "}
              </p>
            </div>
            <div className="main-sec1-div3">
              <span className="main-sec1-div3-box">
                <ButtonGitHub />
                <ButtonLinkedin />
              </span>
              <span className="main-sec1-div3-box2">
              <ScrollLink
              to="formEmail"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              className="navBar-p p4"
            ><button className="btn-contato">GET IN TOUCH</button></ScrollLink>

                <button className="btn-resume">RESUME</button>
              </span>
            </div>
          </Element>
          <section className="main-sec2">
            <div className="boxImage">
              {" "}
               <Socket/>
            </div>
          </section>
          <span className="box-scroll">
            <p className="p-scroll">Scroll</p>
            <img src={ArrowDown} alt="Seta Para Baixo" className="arrowDown" />
          </span>
        </section>

        <Element className="projects" name="Projects" id="Projects">
          <div className="projects-container1">
            <h3 className="projects-container1-title">Projects</h3>
          </div>
          <div className="projects-container3">
            <div className="projects-container3-box1">
              <Projects
                projectImage={Calculator}
                title="Calculator"
                description="This is a calculator to test my knowledge."
                icon1={js}
                icon2={html}
                icon3={css}
                icon4={js}
              />
              <Projects
                projectImage={Calculator}
                title="Project Title"
                description="Project Description"
                icon1={js}
                icon2={react}
                icon3={js}
                icon4={react}
              />
            </div>

            <div className="projects-container3-box2">
              <Projects
                projectImage={Calculator}
                title="Project Title"
                description="Project Description"
                icon1={js}
                icon2={react}
                icon3={js}
                icon4={react}
              />
              <Projects
                projectImage={Calculator}
                title="Project Title"
                description="Project Description"
                icon1={js}
                icon2={react}
                icon3={js}
                icon4={react}
              />
            </div>
          </div>
        </Element>
    {/*----About Me-----*/}
        <Element className="aboutMe" name="AboutMe">
          <div className="aboutMe-container1">
            <h4 className="aboutMe-container1-title">Hi There!</h4>
            <span className="aboutMe-container1-description">
              <p className="aboutMe-container1-description-text">
                Hi, I'm Laertes, a passionate full-stack developer with a diverse
                set of skills that combine to create exceptional web
                experiences. With a special focus on React.js, HTML, CSS,
                Node.js and a keen eye for UI/UX details, I'm prepared to
                transform your ideas into stunning web interfaces.
              </p>
              <p className="aboutMe-container1-description-text">
                I am committed to creating digital solutions that not only meet
                technical needs but also stand out in terms of design and
                usability. Delivering clean code and a responsive website.
              </p>
            </span>
            <Link to="/AboutMe">
              <button className="aboutMe-container1-readMore" onClick={ScrollToTop}>READ MORE</button>
            </Link>
          </div>
          <div className="aboutMe-container2">
            <img src={MyPhoto} alt="" className="MyImage" />
          </div>
        </Element>
        <Element name="formEmail">
        <section className="formEmail">
          <EmailJs/>
        </section>
        </Element>
      </main>
    </>
  );
}
