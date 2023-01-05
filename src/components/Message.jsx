import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Message({message, currentMsger}) {

    // console.log(message)
  return (
    <div className=" w-11/12 flex flex-col text-white-50 ml-2 my-2 ">
      <div className="topbar">
        <p className="name ml-16 mb-1">{currentMsger.profile_name}</p>
      </div>
      <div className="bottombar  flex">
        <img
          className="rounded-full w-10 h-10 object-cover mr-5 flex-shrink-0"
          src={currentMsger.profile_pic}
        ></img>
        <p className="messagetext max-w-3/4 text-s bg-purple-50 rounded-xl py-1 px-2">
         {message.message}
        </p>
      </div>
      <div className="time ml-16"> 1 hour ago</div>
    </div>
  );
}
