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

export default function AboutMe() {
  return (
    <>
      <main>
        <section className="AboutMe">
          <section className="AboutMe-container1">
            <div className="AboutMe-container1-boxTitle">
              <h1>About Me</h1>
            </div>
            <div className="AboutMe-container1-box2">
              <span className="AboutMe-container1-box2-boxImage">
                <MyImage/>
              </span>
              <span className="AboutMe-container1-box2-boxDescription">
                <h4>Quote...</h4>
                <p className="AboutMe-container1-box2-boxDescription-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione quia fugit cum facilis libero similique nobis, ut
                  consectetur perspiciatis vel doloribus quae omnis adipisci,
                  repellendus autem in voluptatem aliquid assumenda. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Ratione quia
                  fugit cum facilis libero similique nobis, ut consectetur
                  perspiciatis vel doloribus quae omnis adipisci, repellendus
                  autem in voluptatem aliquid assumenda. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ratione quia fugit cum
                  facilis libero similique nobis, ut consectetur perspiciatis
                  vel doloribus quae omnis adipisci, repellendus autem in
                  voluptatem aliquid assumenda. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ratione quia fugit cum facilis
                  libero similique nobis, ut consectetur perspiciatis vel
                  doloribus quae omnis adipisci, repellendus autem in voluptatem
                  aliquid assumenda.
                </p>
              </span>
            </div>
          </section>
          <section className="AboutMe-container2">
            <div className="AboutMe-container2-box1">
              <h4>Skills</h4>
            </div>
            <div className="AboutMe-container2-box2">
              <p className="AboutMe-container2-box2-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus voluptates minus eos asperiores deserunt laudantium
                esse facere suscipit animi voluptate, laborum soluta ab
                excepturi ipsa iste perferendis inventore atque laboriosam.
              </p>
            </div>
            <div className="AboutMe-container2-box3">
              <span className="AboutMe-container2-box3-skills">
                <img src={HtmlIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">HTML5</p>
              </span>
              <span className="AboutMe-container2-box3-skills"></span>
              <span className="AboutMe-container2-box3-skills">
                <img src={CssIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">CSS3</p>
              </span>
              <span className="AboutMe-container2-box3-skills">
                <img src={JavaScriptIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">
                  JavaScript
                </p>
              </span>
              <span className="AboutMe-container2-box3-skills">
                <img src={ReactIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">React</p>
              </span>
              <span className="AboutMe-container2-box3-skills">
                <img src={FigmaIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">Figma</p>
              </span>
              <span className="AboutMe-container2-box3-skills">
                <img src={GitHubIcon} alt="" />
                <p className="AboutMe-container2-box3-skills-name">GitHub</p>
              </span>
            </div>
          </section>
          <section className="AboutMe-container3"> </section>
        </section>
      </main>
    </>
  );
}
