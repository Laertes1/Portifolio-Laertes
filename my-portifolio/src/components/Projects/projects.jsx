import React from "react";
import "../Projects/projects.css";

/*-----Buttons-----*/
import Button1 from "../Projects/buttons/button1/button1";


export default function projects(props) {
  return (
    <>
      {/*-----Projects-----*/}

      <div className="projects-container2-box1">
        <span className="projects-container2-box-contents1">
          <span className="content">{props.content}</span>
          <img src={props.projectImage} alt={props.alt} className="project1" style={{display:props.display}}/>
        </span>
        <span className="projects-container2-box1-box">
          <span className="projects-container2-box-contents2">
            <h4 className="projects-container2-box-contents2-title">
              {props.title}
            </h4>
            <p className="projects-container2-box-contents2-text">
              {props.description}
              <a href="https://github.com/Saullo-Programador" >{props.mention}</a>
            </p>
          </span>
          <span className="projects-container2-box-contents3">
            <img src={props.icon1} alt="icone i1" className="icon" />
            <img src={props.icon2} alt="icone i2" className="icon" />
            <img src={props.icon3} alt="icone i3" className="icon" />
            <img src={props.icon4} style={props.style} alt="icone 4 " className="icon i4" />
          </span>
          <span className="projects-container2-box-contents4">
            <Button1 liveCode={props.liveCode} />
          </span>
        </span>
      </div>
    </>
  );
}
