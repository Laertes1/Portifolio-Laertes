import './index.css'
/*-----Components-----*/
import '../../components/root/root.css'
import NavBar from '../../components/NavBar/NavBar'
import Projects from '../../components/Projects/projects'
import Footer from '../../components/Footer/Footer'
/*-----Images-----*/
import Image from '../../assets/Vector.svg'
import projectTest from '../../assets/captura.png'
import  MyPhoto from '../../assets/minhaFoto.jpg'
/*----Icons----*/
import  ArrowDown  from '../../assets/icons/noBackGround/Icon=arrow-down, Theme=dark, State=default.svg'
/*-----Icons------*/
import js from '../../assets/icons/noBackGround/Icon=javascript, Theme=dark, State=default.svg'
import react from '../../assets/icons/noBackGround/Icon=react, Theme=dark, State=default.svg'
/*-----Buttons-----*/
import ButtonGitHub from '../../components/Buttons/GitHubIcon/GitHubIcon'
import ButtonLinkedin from '../../components/Buttons/LinkedinIcon/LinkedinIcon'
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
                  Olá! Sou Laertes, um desenvolvedor front-end com sólida
                  experiência em criação de aplicações web.{" "}
                </p>
              </div>
              <div className="main-sec1-div3">
                <span className="main-sec1-div3-box">
                 <ButtonGitHub/>
                 <ButtonLinkedin/>
                </span>
                <span className="main-sec1-div3-box2">
                  <button className="btn-contato">GET IN TOUCH</button>

                  <button className="btn-resume">RESUME</button>
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
            <div className="projects-container3">
                <div className="projects-container3-box1">
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

                <div className="projects-container3-box2">
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
            </div>
          </section>

          <section className="aboutMe">
            <div className="aboutMe-container1">
              <h4 className="aboutMe-container1-title">Hi There!</h4>
              <span className="aboutMe-container1-description">
                <p className="aboutMe-container1-description-text">
                  Olá! Sou Laertes, um desenvolvedor front-end com sólida
                  experiência em criação de aplicações web envolvendo HTML, CSS,
                  JavaScript, Node.js e, especialmente, React. Sou apaixonado
                  por tecnologia e busco constantemente aprimorar minhas
                  habilidades para oferecer soluções web excepcionais.
                </p>
                <p className="aboutMe-container1-description-text">
                  Estou entusiasmado em continuar minha jornada como
                  desenvolvedor web, sempre ansioso para absorver novas
                  habilidades e explorar tecnologias emergentes. Agradeço pela
                  consideração e estou pronto para contribuir para o sucesso de
                  projetos inovadores!
                </p>
              </span>
              <button className="aboutMe-container1-readMore">READ MORE</button>
            </div>
            <div className="aboutMe-container2">
              <img src={MyPhoto} alt="" className="MyImage" />
            </div>
          </section>
        </main>
        <Footer/>
      </>
    );
}