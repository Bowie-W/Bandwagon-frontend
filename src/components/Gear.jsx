import React, { Component } from "react";
import Slider from "react-slick";
import "../components/carousel/Carousel.css";
import "../components/carousel/Carousel-theme.css";
import { useParams } from "react-router";

export default function Gear({ gear, tokenInfo }) {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const param = useParams()


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`bg-gray-100 justify-center items-center w-full overflow-scroll md:overflow-hidden text-white-50 w-full h-full md:h-full md:rounded-b-xl md:pt-16`}
    >
      <Slider {...settings}>
        {gear.length !== 0 ? (
          gear.map((gear_info) => (
            <div className=" " key={gear_info.id}>
              <div className="flex flex-col ml-12 w-full items-center md:ml-0  md:flex-row">
                <img
                  className=" w-32 h-32 md:h-44 md:w-44 lg:w-64 lg:h-64 lg:w-64 mt-5 mx-5 object-cover"
                  src={gear_info.gear_pic}
                />
                <div className="w-1/2 mt-5 lg:ml-20 ">
                  <h1 className="name mb-5  text-xl"> Instrument Name</h1>
                  <p className="description ">
                    {gear_info.gear_description}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center item-center">
            {tokenInfo.id === param.undefined ?
            <h2 className="ml-5 mt-5 md:mt-0 w-full">You're not showing off any gear.</h2>:
            <h2 className="ml-5 mt-5 md:mt-0 w-full">No Gear Available</h2>}
            {tokenInfo.id === param.undefined ?
            <button className="text-white-50 bg-purple-50 p-1 mt-3 ml-5 rounded-full"> Let's Change That!</button>:null}
          </div>
        )}
      </Slider>
    </div>
  );
}
