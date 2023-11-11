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
        value2='Read More'
        value3='skills'
        value4='Talk to me'
        />
      <main>
        <section className="AboutMe">
      <Element  name="ReadMore">
          <section className="AboutMe-container1">
            <div className="AboutMe-container1-boxTitle">
              <h1>About Me</h1>
            </div>
            <div className="AboutMe-container1-box2">
              <span className="AboutMe-container1-box2-boxImage">
                <MyImage/>
              </span>
              <span className="AboutMe-container1-box2-boxDescription">
                <h4>More about me</h4>
                <p className="AboutMe-container1-box2-boxDescription-description">
                Hello, I'm Laertes, a passionate full-stack developer with a diverse set of skills that come together to create exceptional web experiences. I'm ready to transform your ideas into stunning web interfaces. I also have solid knowledge in TypeScript, enabling me to develop in a more robust and secure manner, ensuring a strong foundation for the projects I undertake. My expertise extends beyond front-end and databases. In the back-end, I have experience with Express.js, a robust framework that allows me to create efficient and scalable web servers. This, combined with my knowledge of Node.js, empowers me to develop complete web solutions, from user interface to server, providing a seamless experience for end-users. I am excited to collaborate on challenging projects that demand a diverse set of skills, combining my passion for programming with a user-centered and quality-focused approach. 
                </p>
              </span>
            </div>
          </section>
          </Element>
      <Element  name="skills" className="skills">
          <section className="AboutMe-container2">
            <div className="AboutMe-container2-box1">
              <h4>Skills</h4>
            </div>
            <div className="AboutMe-container2-box2">
              <p className="AboutMe-container2-box2-description">
              With a special focus on React.js, HTML, CSS, Node.js, Typescript, and a keen eye for UI/UX details.
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
              </div>
              <div className="AboutMe-container2-box3-box2">
              <span className="AboutMe-container2-box3-box2-skills react">
                <img src={ReactIcon} alt="" />
                <p className="AboutMe-container2-box3-box2-skills-name">React</p>
              </span>
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
            </div>
              </div>

          </section>
          </Element>
          <section className="AboutMe-container3"> </section>
        </section>
        
      </main>
    </>
  );
}
