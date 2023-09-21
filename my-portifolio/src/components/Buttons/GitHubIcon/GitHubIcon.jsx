import React from 'react';
import '../../Buttons/buttons.css';
import gitHubIcon from '../../../assets/icons/black/BsGithub.svg'

export default function GitHubIcon() {
  return (
    <>
         <a
                    href="https://github.com/Laertes1"
                    className="a-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="box-Icons">
                      <img
                        src={gitHubIcon}
                        alt="Icone Git Hub"
                        className="Icons"
                      />
                    </span>
                  </a>
    </>
  )
}
