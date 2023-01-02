import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function ConversationSection (){

    return(
        <div className="  flex text-black-50 ml-2 my-3 ">
        <div className="topbar w-1/6 flex-shrink-0">
        <img
            className="rounded-full w-12 h-12 object-cover mr-5 flex-shrink-0"
            src="https://res.cloudinary.com/dl2liojkl/image/upload/v1670954555/tsultan_ufsood.jpg"
          ></img>
        </div>
        <div className="bottombar  flex flex-col max-w-xs ">
        <p className="name ">Test Name</p>
          <p className="messagetext truncate text-s bg-purple-50 ">
            Frank the tank is the spank the rank and trank the blank asds sad asd samd,{" "}
          </p>
        </div>
      </div>
    )

}
