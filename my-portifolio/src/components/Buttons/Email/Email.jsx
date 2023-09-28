import React from 'react'
import '../../Buttons/buttons.css'
import Emaill from '../../../assets/icons/black/email.svg'
export default function Email() {
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
                        src={Emaill}
                        alt="Icone Git Hub"
                        className="Icons"
                      />
                    </span>
                  </a>
        </>
    )
}
