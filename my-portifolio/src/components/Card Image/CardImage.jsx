import React from 'react'
import './CardImage.css'
import MyImage from '../../assets/minhaFoto.jpg'
export default function CardImage() {
  return (
    <div className="cardPhoto"><img src={MyImage} className='MyPhoto' alt="" /></div>
  )
}
