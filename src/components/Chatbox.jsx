import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { io } from "socket.io-client";

export default function Chatbox({ handleChatBox, convoMsgs, setConvoMsgs,currentMsger, userId, navUser }) {

    const [newMsg, setNewMsg] = useState('')
    const [socket, setSocket] = useState(null)
    const scrollref = useRef()

    console.log(newMsg)

    const submitMsg = (event) =>{
        event.preventDefault();
        const msgInfo = {
            id: uuidv4(),
            sender_id: userId,
            message: newMsg,
            conversation_id: convoMsgs[0].conversation_id,

        }
        axios
        .post(`http://localhost:5050/messages/${convoMsgs[0].conversation_id}`, msgInfo)
        .then((response) =>{
            setConvoMsgs([...convoMsgs, response.data])
            setNewMsg('')
        })
    }

    useEffect(()=>{
        setSocket(io('ws://localhost:8080'))
    },[])

    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior: 'smooth'})
    }, [convoMsgs])

    console.log(convoMsgs)

  return (
    <div
      className="convo-container bg-black-50 w-screen h-screen pb-16 inset-y-0 absolute rounded-xl
    
                    md:h-80 md:w-80 md:inset-y-72 lg:inset-y-40 md:fixed md:pb-0"
    >
      <div className="flex justify-end bg-gray-50 ">
        <button
          onClick={handleChatBox}
          className="mr-1 mt-1 mb-1 bg-purple-50 rounded-full px-2"
        >
          X
        </button>
      </div>
      <div className="h-5/6 overflow-y-scroll scrollbar-thin">
        {convoMsgs.map((message) => {
          return (
            <div ref={scrollref}>
            <Message
              message={message}
              currentMsger={currentMsger}
              convoMsgs={convoMsgs}
              userId={userId}
              key={message.id}
              navUser={navUser}
            />
            </div>
          );
        })}
      </div>
      <form onSubmit={submitMsg} className="flex items-center lg:rounded-bl-xl bg-gray-50 h-1/4">
        <textarea value={newMsg} onChange={(e) => setNewMsg(e.target.value)} className="h-5/6 w-3/4 p-1 rounded resize-none scrollbar-thin ml-2 text-black-50"></textarea>
        <button className="text-white-50 ml-3 bg-purple-50 h-1/2 px-5 rounded-full">
          Send
        </button>
      </form>
    </div>
  );
}
