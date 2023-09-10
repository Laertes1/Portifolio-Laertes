
import { AiOutlineArrowDown } from "react-icons/ai"; 
import './index.css'
import lua from '../../assets/icons/noBackGround/moon.svg'
import logo from '../../assets/icons/noBackGround/ns..svg'

import Image from '../../assets/Vector.svg'
/*----Icons----*/
import gitHubIcon from '../../assets/icons/black/BsGithub.svg'
import linkedin from '../../assets/icons/black/BsLinkedin.svg'

export default function Index(){
    return (
      <>
        {/*--------Nav Bar-----*/}
        <nav>
          <div className="box1">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <section className="box2">
            <div className="box2-box1">
              <p className="navBar-p p1">Home</p>
              <p className="navBar-p p2">Projects</p>
              <p className="navBar-p p3">About</p>
              <p className="navBar-p p4">Resume</p>
            </div>
            <div className="box2 box1">
              <img src={lua} alt="icone da lua" className="lua" />
            </div>
          </section>
        </nav>
        {/*-----Home----*/}
        <main>
          <section className="section-pincipal">
            <section className="main-sec1">
              <div className="main-sec1-div1">
                <h3 className="title">Olá, Eu sou Laertes.</h3>
                <h4 className="main-sec1-div1-h4">Front-end Developer</h4>
              </div>
              <div className="main-sec1-div2">
                <p className="main-sec1-div2-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="main-sec1-div3">
                <span className="main-sec1-div3-box">
                  <a href="https://github.com/Laertes1" className="a-icon" target="_blank" rel="noopener noreferrer">
                  <span className="box-gitIcon">
                    <img
                      src={gitHubIcon}
                      alt="Icone Git Hub"
                      className="gitIcon"
                    />
                  </span>
                  </a>
                  <a href="https://www.linkedin.com/in/laertes-angelo-b5b618235/" className="box-icon" target="_blank" rel="noopener noreferrer">
                  <span className="box-linkedinIcon">
                    <img
                      src={linkedin}
                      alt="icon linkedin"
                      className="linkedinIcon"
                    />
                  </span>
                  </a>
                </span>
                <span className="main-sec1-div3-box2">
                  <button className="btn-contato">Entrar em contato</button>

                  <button className="btn-resume">Resume</button>
                </span>
              </div>
            </section>
            <section className="main-sec2">
              <div className="boxImage">
                {" "}
                <img src={Image} alt="imae" className="main-image" />
              </div>
            </section>
            <span className="box-scroll">
                <p className="p-scroll">Scroll</p>
                <AiOutlineArrowDown />
            </span>
          </section>
        </main>
      </>
    );
}