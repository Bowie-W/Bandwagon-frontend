import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import'./Carousel-theme.css'
import Frank from '../../assests/images/frank-ava.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w-1/2 bg-red-500">
        <h2> Single Item</h2>
        <Slider {...settings}>
       
        <div>
          <img
            className=" w-32 h-32  md:w-72 md:h-72 mt-5 mx-5 "
            src={Frank}
          />
          <div className="w-1/2 mt-5 md:ml-10 ">
            <h1 className="name mb-5 text-xl"> Instrument Name</h1>
            <p className="description">'Testing the Slider'</p>
          </div>
        </div>
        <div>
          <img
            className=" w-32 h-32  md:w-72 md:h-72 mt-5 mx-5 "
            src={Frank}
          />
          <div className="w-1/2 mt-5 md:ml-10 ">
            <h1 className="name mb-5 text-xl"> Instrument Name</h1>
            <p className="description">'Testing the Slider'</p>
          </div>
        </div>
        <div>
          <img
            className=" w-32 h-32  md:w-72 md:h-72 mt-5 mx-5 "
            src={Frank}
          />
          <div className="w-1/2 mt-5 md:ml-10 ">
            <h1 className="name mb-5 text-xl"> Instrument Name</h1>
            <p className="description">'Testing the Slider'</p>
          </div>
        </div>
  
        </Slider>
      </div>
    );
  }
}