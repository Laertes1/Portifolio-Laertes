import React from "react";
import "../NavBar/NavBar.css";
import "../root/root.css";

import lua from "../../assets/icons/noBackGround/moon.svg";
import logo from "../../assets/icons/noBackGround/ns..svg";
/*-----React Link-----*/
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      {/*--------Nav Bar-----*/}
      <nav>
        <div className="box1">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <section className="box2">
          <div className="box2-box1">
            <Link to="/" className="Link"><p className="navBar-p p1">Home</p></Link>

            <p className="navBar-p p2">Projects</p>

            <p className="navBar-p p3">About Me</p>

            <p className="navBar-p p4">Resume</p>
          </div>
          <div className="box2 box1">
            <img src={lua} alt="icone da lua" className="lua" />
          </div>
        </section>
      </nav>
    </>
  );
}
