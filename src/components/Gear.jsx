import axios from "axios";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import '../components/carousel/Carousel.css'
import '../components/carousel/Carousel-theme.css'

export default function Gear({ gear }) {
  const Serv_URL = "http://localhost:5050";
  // const [gear, setGear] = useState([]);
  const token = sessionStorage.getItem("authToken");


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-gray-50 w-full h-1/2 md:h-full md:rounded-b-xl ">
      <Slider {...settings}>
      {gear.map((gear_info) => (
        <div className="flex " key={gear_info.id}>
          <div className="flex">
          <img
            className=" w-32 h-32 md:h-56 md:w-56 lg:w-64 lg:h-64 mt-5 mx-5 md:pl-10 object-cover"
            src={gear_info.gear_pic}
          />
          <div className="w-1/2 mt-5 lg:ml-20 ">
            <h1 className="name mb-5 text-xl"> Instrument Name</h1>
            <p className="description">{gear_info.gear_description}</p>
          </div>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}
