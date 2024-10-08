import React from "react";
import "./carrousel.css";
import Captures1 from "../../assets/Projects/capturesE-commerce/Nova pasta/First.png";
import Captures2 from "../../assets/Projects/capturesE-commerce/Nova pasta/second.png";
import Captures3 from "../../assets/Projects/capturesE-commerce/Nova pasta/third.png";
import Captures4 from "../../assets/Projects/capturesE-commerce/Nova pasta/fourth.png";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
  
export default function App() {
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