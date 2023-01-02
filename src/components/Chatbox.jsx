import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";

export default function Chatbox() {
  return (
    <div  className="convo-container bg-black-50 h-screen ">
      <div className="h-5/6 overflow-y-scroll">
        <Message />
        <Message />
      </div>
      <form className="flex items-center bg-gray-50 h-1/4">
        <textarea className="h-5/6 w-3/4 p-1 rounded ml-2"></textarea>
        <button className="text-white-50 ml-3 bg-purple-50 h-1/2 px-5 rounded-full">Send</button>
      </form>
    </div>
  );
}
