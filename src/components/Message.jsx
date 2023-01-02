import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Message() {
  return (
    <div className=" w-11/12 flex flex-col text-white-50 ml-2 my-2">
      <div className="topbar">
        <p className="name ml-16">Test Name</p>
      </div>
      <div className="bottombar  flex">
        <img
          className="rounded-full w-10 h-10 object-cover mr-5 flex-shrink-0"
          src="https://res.cloudinary.com/dl2liojkl/image/upload/v1670954555/tsultan_ufsood.jpg"
        ></img>
        <p className="messagetext max-w-3/4 text-s bg-purple-50 rounded-xl py-1 px-2">
          Frank the tank is the spank the rank and trank the blank,{" "}
        </p>
      </div>
      <div className="time ml-16"> 1 hour ago</div>
    </div>
  );
}
