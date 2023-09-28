import React from "react";
import {  Routes, Route } from "react-router-dom";
/*-----AboutMe-----*/
import AboutMe from "../../pages/AboutMe/AboutMe";
/*-----Home----*/
import Home from "../../pages/home/index"
export default function Routers() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
   
  );
}
