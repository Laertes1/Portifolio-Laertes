import React from "react";
import "../button1/button1.css";
export default function button1(Props) {
  return (
    <>
      <a href={Props.liveCode} target="_blank" rel="noreferrer">
        <button className="button">view code</button>
      </a>
    </>
  );
}
