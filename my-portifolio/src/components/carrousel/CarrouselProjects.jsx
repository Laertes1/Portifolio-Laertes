import React from "react";
import "./carrousel.css";
  //? Project search cep in java
  import CepAbout from "../../assets/Projects/searchedCep-about.png"
  import Cep from "../../assets/Projects/searchedCep.png"
  //? Project E-commerce
  import Captures1 from "../../assets/Projects/capturesE-commerce/First.png";
  import Captures2 from "../../assets/Projects/capturesE-commerce/Second.png";
  import Captures3 from "../../assets/Projects/capturesE-commerce/Third.png";
  import Captures4 from "../../assets/Projects/capturesE-commerce/Fourth.png";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
  
 function CarrouselCep() {
  return (
    <div style={{display: 'block', width: "100%", height: "309px"} } className="carrousel">
      <Carousel variant="dark">
        <Carousel.Item interval={3500}>
          <img
            className='d-block w-100'
            src={Cep}
            alt="Principal"
          />
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className='d-block w-100'
            src={CepAbout}
            alt="Sobre"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

  
function CarrouselEComerce() {
  return (
    <div style={{display: 'block', width: "100%", height: "309px"} } className="carrousel">
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <img
            className='d-block w-100'
            src={Captures1}
            alt="Start"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className='d-block w-100'
            src={Captures2}
            alt="Products"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className='d-block w-100'
            src={Captures3}
            alt="Products "
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className='d-block w-100'
            src={Captures4}
            alt="Footer"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export {CarrouselCep, CarrouselEComerce};