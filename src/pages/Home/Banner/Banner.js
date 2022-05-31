import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
      <div className='banner-container'>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              src="https://images.wallpaperscraft.com/image/single/mclaren_p1_gtr_mclaren_p1_mclaren_128793_2048x1152.jpg"
              alt="1st_Slide"
            />
            <Carousel.Caption>
                <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>“Life is like riding a bicycle. To keep your balance you must keep moving”</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              src="https://images.wallpaperscraft.com/image/single/rollsroyce_front_view_headlights_136993_2048x1152.jpg"
              alt="2nd_Slide"
            />
            <Carousel.Caption>
              <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>“It never gets easier, you just go faster"</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.wallpaperscraft.com/image/single/nissan_gtr_supercar_121502_2048x1152.jpg"
              alt="3rd_Slide"
            />
           <Carousel.Caption>
              <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>“Crashing is part of cycling as crying is part of love”</h1>
           </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;