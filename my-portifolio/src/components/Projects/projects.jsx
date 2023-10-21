import React from "react";
import "../Projects/projects.css";

/*-----Buttons-----*/
import Button1 from "../Projects/buttons/button1/button1";
import Button2 from "../Projects/buttons/button2/button2";

export default function projects(props) {
  return (
    <>
      {/*-----Projects-----*/}

      <div className="projects-container2-box                 1">
        <span className="projects-container2-box-contents1">
          <img src={props.projectImage} alt="Projeto 1" className="project1" />
        </span>
        <span className="projects-container2-box1-box">
          <span className="projects-container2-box-contents2">
            <h4 className="projects-container2-box-contents2-title">
              {props.title}
            </h4>
            <p className="projects-container2-box-contents2-text">
              {props.description}
            </p>
          </span>
          <span className="projects-container2-box-contents3">
            <img src={props.icon1} alt="icone 1" className="icon" />
            <img src={props.icon2} alt="icone 2" className="icon" />
            <img src={props.icon3} alt="icone 3" className="icon" />
            <img src={props.icon4} alt="icone 4" className="icon" />
          </span>
          <span className="projects-container2-box-contents4">
            <Button1 liveCode="https://github.com/Laertes1/Calculadora" />
            <Button2 />
          </span>
        </span>
      </div>
    </>
  );
}
