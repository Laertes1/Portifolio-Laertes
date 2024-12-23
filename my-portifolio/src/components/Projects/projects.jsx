import React from "react";
import "../Projects/projects.css";

/*-----Buttons-----*/
import Button1 from "../Projects/buttons/button1/button1";


 function Projects(props) {
  return (
    <>
      {/*-----Projects-----*/}

      <div className="projects-container2-box1">
        <span className="projects-container2-box-contents1 ">
          <span className="content">{props.content}</span>
          <img src={props.projectImage} alt={props.alt} className="project1" style={{display:props.display}}/>
        </span>
        <span className="projects-container2-box1-box">
          <span className="projects-container2-box-contents2 ">
            <h4 className="projects-container2-box-contents2-title">
              {props.title}
            </h4>
            <p className="projects-container2-box-contents2-text">
              {props.description}
            </p>
          </span>
          <span className="projects-container2-box-contents3">
            <img src={props.icon1} alt="icone i1" className="icon" />
            <img src={props.icon2} style={props.styleIcon2} alt="icone i2" className="icon" />
            <img src={props.icon3} style={props.styleIcon3} alt="icone i3" className="icon" />
            <img src={props.icon4} style={props.styleIcon4} alt="icone 4 " className="icon i4" />
          </span>
          <span className="projects-container2-box-contents4">
            <Button1 liveCode={props.liveCode} />
          </span>
        </span>
      </div>
    </>
  );
}
//! Gambiarra altamente qualificada
// Posteriormente encontrar solução como menos linhas de códigos.
 function ProjectVideo(props) {
  return (
    <>
      {/*-----Projects-----*/}

      <div className="projects-container2-box1">
        <span className="projects-container2-box-contents1 videoProject">
          <span className="content">{props.content}</span>
        </span>
        <span className="projects-container2-box1-box">
          <span className="projects-container2-box-contents2 ">
            <h4 className="projects-container2-box-contents2-title">
              {props.title}
            </h4>
            <p className="projects-container2-box-contents2-text">
              {props.description}
              <a href="https://github.com/Saullo-Programador" >Saullo Paullo</a>
            </p>
          </span>
          <span className="projects-container2-box-contents3">
            <img src={props.icon1} alt="icone i1" className="icon" />
            <img src={props.icon2} style={props.styleIcon2} alt="icone i2" className="icon" />
            <img src={props.icon3} style={props.styleIcon3} alt="icone i3" className="icon" />
            <img src={props.icon4} style={props.styleIcon4} alt="icone 4 " className="icon i4" />
          </span>
          <span className="projects-container2-box-contents4">
            <Button1 liveCode={props.liveCode} />
          </span>
        </span>
      </div>
    </>
  );
}

export {ProjectVideo, Projects};