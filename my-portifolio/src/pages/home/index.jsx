import './index.css'
import '../../components/root/root.css'
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/projects'
import Image from '../../assets/Vector.svg'
import projectTest from '../../assets/captura.png'

/*----Icons----*/
import gitHubIcon from '../../assets/icons/black/BsGithub.svg'
import linkedin from '../../assets/icons/black/BsLinkedin.svg'
import  ArrowDown  from '../../assets/icons/noBackGround/Icon=arrow-down, Theme=dark, State=default.svg'
/*-----Icons------*/
import js from '../../assets/icons/noBackGround/Icon=javascript, Theme=dark, State=default.svg'
import react from '../../assets/icons/noBackGround/Icon=react, Theme=dark, State=default.svg'
export default function Index(){
    return (
      <>
        {/*-----NavBar-----*/}
        <NavBar />
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
                  <a
                    href="https://github.com/Laertes1"
                    className="a-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="box-gitIcon">
                      <img
                        src={gitHubIcon}
                        alt="Icone Git Hub"
                        className="gitIcon"
                      />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/laertes-angelo-b5b618235/"
                    className="box-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <img
                src={ArrowDown}
                alt="Seta Para Baixo"
                className="arrowDown"
              />
            </span>
          </section>

          <section className="projects">
            <div className="projects-container1">
              <h3 className="projects-container1-title">Projects</h3>
            </div>
            <div className="projects-container2">
              <Projects
              projectImage={projectTest}
              title="Project Title"
              description="Project Description"
              icon1={js}
              icon2={react}
              icon3={js}
              icon4={react}
              />
               <Projects
              projectImage={projectTest}
              title="Project Title"
              description="Project Description"
              icon1={js}
              icon2={react}
              icon3={js}
              icon4={react}
              />
            </div>
          </section>
        </main>
      </>
    );
}