import React from 'react';
import '../buttons.css';

import linkedin from '../../../assets/icons/black/BsLinkedin.svg'
export default function LinkedinIcon() {
  return (
    <>
        <a
                    href="https://www.linkedin.com/in/laertes-angelo-b5b618235/"
                    className="box-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="box-Icons">
                      <img
                        src={linkedin}
                        alt="icon linkedin"
                        className="Icons"
                      />
                    </span>
                  </a>
    </>
  )
}
