import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";

export default function Chatbox({ handleChatBox, convoMsgs, currentMsger }) {
  return (
    <div
      className="convo-container bg-black-50 w-screen h-screen pb-16 inset-y-0 absolute rounded-xl
    
                    md:h-80 md:w-80 md:inset-y-72 md:pb-0"
    >
      <div className="flex justify-end">
        <button
          onClick={handleChatBox}
          className="mr-2 mt-2 bg-purple-50 rounded-full px-2"
        >
          X
        </button>
      </div>
      <div className="h-5/6 overflow-y-scroll scrollbar-thin">
        {convoMsgs.map((message) => {
          return (
            <Message
              message={message}
              currentMsger={currentMsger}
              key={message.id}
            />
          );
        })}
      </div>
      <form className="flex items-center bg-gray-50 h-1/4">
        <textarea className="h-5/6 w-3/4 p-1 rounded ml-2"></textarea>
        <button className="text-white-50 ml-3 bg-purple-50 h-1/2 px-5 rounded-full">
          Send
        </button>
      </form>
    </div>
  );
}
