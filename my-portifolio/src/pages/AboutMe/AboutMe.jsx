import React from "react";
import "./AboutMe.css";
/*-----Image-----*/
import MyImage from "../../components/Card Image/CardImage";
/*-----Icons-----*/
import HtmlIcon from "../../assets/icons/Default/Icon=html, Theme=dark, State=hover.svg";
import CssIcon from "../../assets/icons/Default/Icon=css, Theme=dark, State=hover.svg";
import GitHubIcon from "../../assets/icons/Default/Icon=github, Theme=dark, State=hover.svg";
import JavaScriptIcon from "../../assets/icons/Default/Icon=javascript, Theme=dark, State=hover.svg";
import FigmaIcon from "../../assets/icons/Default/Icon=figma, Theme=dark, State=hover.svg";
import ReactIcon from "../../assets/icons/Default/Icon=react, Theme=dark, State=hover.svg";
import Typescript from '../../assets/icons/Default/typescript.svg'
import Java from "../../assets/icons/noBackGround/java.png"
// NavBar
import NavBar from '../../components/NavBar/NavBar'
// React Scrool
import { Element } from "react-scroll";

export default function AboutMe() {
  return (
    <>
     <NavBar 
        to='Home'
        to2="ReadMore"
        to3="skills"
        to4="formEmail"
        value1='Home'
        value2='Mais sobre'
        value3='Habilidades'
        value4='Fale comigo'
        />
      <main>
        <section className="AboutMe">
      <Element  name="ReadMore">
          <section className="AboutMe-container1">
            <div className="AboutMe-container1-boxTitle">
              <h1 className="AboutMe-container1-boxTitle-title">Sobre mim</h1>
            </div>
            <div className="AboutMe-container1-box2">
              <span className="AboutMe-container1-box2-boxImage">
                <MyImage/>
              </span>
              <span className="AboutMe-container1-box2-boxDescription">
                <h4>Mais sobre mim</h4>
                <p className="AboutMe-container1-box2-boxDescription-description">
                Olá, sou Laertes, um desenvolvedor full-stack apaixonado com um conjunto diversificado de habilidades que se unem para criar experiências web excepcionais. Estou pronto para transformar suas ideias em interfaces web impressionantes. Possuo também sólidos conhecimentos em TypeScript, o que me permite desenvolver de forma mais robusta e segura, garantindo uma base sólida para os projetos que realizo. Minha experiência vai além de front-end e bancos de dados. No back-end, tenho experiência com Express.js, um framework robusto que me permite criar servidores web eficientes e escaláveis. Isso, combinado com meu conhecimento de Node.js, me permite desenvolver soluções web completas, desde a interface do usuário até o servidor, proporcionando uma experiência perfeita para os usuários finais. Estou entusiasmado em colaborar em projetos desafiadores que exigem um conjunto diversificado de habilidades, combinando minha paixão por programação com uma abordagem centrada no usuário e focada na qualidade.
                </p>
              </span>
            </div>
          </section>
          </Element>
      <Element  name="skills" className="skills">
          <section className="AboutMe-container2">
            <div className="AboutMe-container2-box1">
              <h4>Habilidades</h4>
            </div>
            <div className="AboutMe-container2-box2">
              <p className="AboutMe-container2-box2-description">
              Com foco especial em React.js, HTML, CSS, Node.js, Typescript e um olhar atento para detalhes de UI/UX.
              </p>
            </div>
            <div className="AboutMe-container2-box3">
              <div className="AboutMe-container2-box3-box1">
              <span className="AboutMe-container2-box3-box1-skills">
                <img src={HtmlIcon} alt="" />
                <p className="AboutMe-container2-box3-box1-skills-name">HTML5</p>
              </span>
              <span className="AboutMe-container2-box3-box1-skills">
                <img src={CssIcon} alt="" />
                <p className="AboutMe-container2-box3-box1-skills-name">CSS3</p>
              </span>
              <span className="AboutMe-container2-box3-box1-skills">
                <img src={JavaScriptIcon} alt="" />
                <p className="AboutMe-container2-box3-box1-skills-name">
                  JavaScript
                </p>
              </span>
              <span className="AboutMe-container2-box3-box2-skills react">
                <img src={ReactIcon} alt="" />
                <p className="AboutMe-container2-box3-box2-skills-name">React</p>
              </span>
              </div>
              <div className="AboutMe-container2-box3-box2">

              <span className="AboutMe-container2-box3-box2-skills figma">
                <img src={FigmaIcon} alt="" />
                <p className="AboutMe-container2-box3-box2-skills-name">Figma</p>
              </span>
              <span className="AboutMe-container2-box3-box2-skills github">
                <img src={GitHubIcon} alt="" />
                <p className="AboutMe-container2-box3-box2-skills-name">GitHub</p>
              </span>
              <span className="AboutMe-container2-box3-box2-skills typescript">
                <img src={Typescript} alt="typescript" className="typeScript"/>
                <p className="AboutMe-container2-box3-box2-skills-name">Typescript</p>
              </span>
              <span className="AboutMe-container2-box3-box2-skills java">
                <img src={Java} alt="Java" className="java"/>
                <p className="AboutMe-container2-box3-box2-skills-name">Java</p>
              </span>
            </div>
              </div>

          </section>
          </Element>
        </section>
        
      </main>
    </>
  );
}
