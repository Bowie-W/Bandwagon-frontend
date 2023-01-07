import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Message({ message, currentMsger, userId, navUser }) {
//   console.log()
  return (
    <div>
      {message.sender_id === userId ? <div className=" w-11/12 flex flex-col text-white-50 ml-4 my-2 ">
        <div className="topbar flex justify-end mb-1">
          <p className="name mb-1">{navUser.profile_name}</p>
        </div>
        <div className="bottombar  flex justify-end">
          <p className="messagetext max-w-3/4 text-s bg-purple-50 rounded-xl py-1 px-2">
            {message.message}
          </p>
          <img
            className="rounded-full w-10 h-10 object-cover ml-5 flex-shrink-0"
            src={navUser.profile_pic}
          ></img>
        </div>
        {/* <div className="time ml-16"> 1 hour ago</div> */}
      </div> : 
      <div className=" w-11/12 flex flex-col text-white-50 ml-3 my-2 ">
        <div className="topbar mb-1">
          <p className="name mb-1">{currentMsger.profile_name}</p>
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
        {/* <div className="time ml-16"> 1 hour ago</div> */}
      </div> }
      </div>
      
  );
}
