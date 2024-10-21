import React from "react";
import "./index.css";
/*-----Components-----*/
import Projects from "../../components/Projects/projects";
import EmailJs from "../../components/Emailjs/EmailJs";
import Socket from "../../components/Socket/Socket";
//? NavBar 
import NavBar from '../../components/NavBar/NavBar'
/*-----Images-----*/
import MyPhoto from "../../assets/minhaFoto.jpg";
import loading from '../../assets/Projects/7331649-carregamento-lento-da-internet-bar-doodle-com-caracol-vetor.jpg'
//? Images From Projects
import CalculatorOfGenes from "../../assets/Projects/Captura2Genes.png";
import Crud from "../../assets/Projects/crud.png";
import Ecommerce from "../../components/carrousel/carrousel.jsx"
//? Video Of project my condominium
import VideoCond from "../../components/videoOfMyCondo/videoOfMyCondo.jsx"
//? Icons
import ArrowDown from "../../assets/icons/noBackGround/Icon=arrow-down, Theme=dark, State=default.svg";
//? Icons
import js from "../../assets/icons/noBackGround/Icon=javascript, Theme=dark, State=default.svg";
import react from "../../assets/icons/noBackGround/Icon=react, Theme=dark, State=default.svg";
import css from "../../assets/icons/noBackGround/Icon=css, Theme=dark, State=default.svg";
import html from "../../assets/icons/noBackGround/Icon=html, Theme=dark, State=default.svg";
import typescript from "../../assets/icons/noBackGround/typescript .svg";
import nodejs from "../../assets/icons/noBackGround/node-js.svg";
//? Buttons
import ButtonGitHub from "../../components/Buttons/GitHubIcon/GitHubIcon";
import ButtonLinkedin from "../../components/Buttons/LinkedinIcon/LinkedinIcon";
//? React Link
import { Link } from "react-router-dom";
//? React Scroll
import { Element } from "react-scroll";
//?Scroll To Top
import ScrollToTop from "../../components/scrollToTop/scrollToTop";
//? React Scroll
const Scroll = require("react-scroll");
const ScrollLink = Scroll.Link;



export default function Index() {
  return (
    <>
        <NavBar 
        to='Home'
        to2="Projects"
        to3="AboutMe"
        to4="formEmail"
        value1='Home'
        value2='Projetos'
        value3='Sobre Mim'
        value4='Fale comigo'
        />
      {/*-----Home----*/}
      <main>
        <section className="section-pincipal">
          <Element className="main-sec1" name="Home">
            <div className="main-sec1-div1">
              <h3 className="title">Olá, eu sou Laertes</h3>
              <h4 className="main-sec1-div1-h4">Full-Stack Developer</h4>
            </div>
            <div className="main-sec1-div2">
              <p className="main-sec1-div2-paragraph">
                 Olá! Sou Laertes, um desenvolvedor full-stack com sólida experiência
                 na criação de aplicações web.{" "}
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
                  className="buttonLinkBoxer"
                >
                  <button className="btn-contato">ENTRAR EM CONTATO </button>
                </ScrollLink>

                <Link to="/AboutMe" className="Link">
                  {" "}
                  <button className="btn-resume">MAIS INFORMAÇÕES</button>
                </Link>
              </span>
            </div>
          </Element>
          <section className="main-sec2">
            <div className="boxImage">
              {" "}
              <Socket />
            </div>
          </section>
  {/* //!Remover */}        <span className="box-scroll"> <p className="p-scroll">Scroll</p> <img src={ArrowDown} alt="Seta Para Baixo" className="arrowDown" />
          </span>
        </section>
           {/* //! Projects   */}
        <Element className="projects" name="Projects" id="Projects">
          <div className="projects-container1">
            <h3 className="projects-container1-title">Projetos</h3>
          </div>
          <div className="projects-container3">
            <div className="projects-container3-box1">
              <Projects
                title="Ecommerce"
                description="Ecommerce focado em produtos para casa."
                icon1={js}
                icon2={react}
                icon3={css}
                icon4={typescript}
                style={{width: "24px"}}
                alt={""}
                liveCode='https://github.com/Laertes1/e-commerce'
                display={'none'}
                content={<Ecommerce/>}
              />
              <Projects
                projectImage={CalculatorOfGenes}
                title="Quadro de Punnett"
                description="Este é o quadro de Punnett, responsavel por realizar misturas genéticas."
                icon1={html}
                icon2={css}
                icon3={js}
                style={{ opacity: "0" }}
                liveCode='https://github.com/Laertes1/ProjetoLucas.git'
              />
            </div>

            <div className="projects-container3-box2">
              <Projects
                projectImage={Crud}
                title="Games love"
                description="Este é um sistema de busca de jogos."
                icon1={js}
                icon2={react}
                icon3={css}
                icon4={nodejs}
                liveCode='https://github.com/Laertes1/Games-for-love.git'
              />
              <Projects
                title="My Condominium"
                description={"Este projeto visa administrar um condomínio. Ele inclui as páginas de Home, documentos dos funcionários, finanças, relatório de gastos, patrimônio, gastos com segurança e uma página que mostra quem possui lotes nas quadras.  Este site foi criado em conjunto com meu amigo "}
                icon1={js}
                icon2={react}
                icon3={nodejs}
                icon4={typescript}
                style={{width: "24px"}}
                alt={""}
                liveCode='https://github.com/Laertes1/My-Condominium.git'
                display={'none'}
                content={<VideoCond/>}
                mention={"Saullo Paullo"}
              />
            </div>
          </div>
        </Element>
        {/*----About Me-----*/}
        <Element className="aboutMe" name="AboutMe">
          <div className="aboutMe-container1">
            <h4 className="aboutMe-container1-title">Olá</h4>
            <span className="aboutMe-container1-description">
              <p className="aboutMe-container1-description-text">
              Olá, sou Laertes, um desenvolvedor full-stack apaixonado com uma
                 conjunto diversificado de habilidades que se combinam para criar experiências web excepcionais. Com foco especial em React.js, HTML, CSS, JavaScript
                 Node.js, Typescript e um olhar atento aos detalhes de UI/UX, estou preparado para
                 transforme suas ideias em interfaces web impressionantes.
              </p>
              <p className="aboutMe-container1-description-text">
              Estou empenhado em criar soluções digitais que não apenas atendam
                 necessidades técnicas, mas também se destacam em termos de design e
                 usabilidade. Entregando código limpo e um site responsivo.
              </p>
            </span>
            <Link to="/AboutMe">
              <button
                className="aboutMe-container1-readMore"
                onClick={ScrollToTop}
              >
                VEJA MAIS
              </button>
            </Link>
          </div>
          <div className="aboutMe-container2">
            <img src={MyPhoto} alt="" className="MyImage" />
          </div>
        </Element>
        <Element name="formEmail" className="formEmailBoxer">
          <section className="formEmail">
            <EmailJs />
          </section>
        </Element>
      </main>
    </>
  );
}
