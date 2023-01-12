import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../components/Message";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { io } from "socket.io-client";

export default function Chatbox({ selectedConvo, handleChatBox, convoMsgs, setConvoMsgs,currentMsger,   setCurrentMsger, userId, navUser }) {

    const [newMsg, setNewMsg] = useState('')
    const socket = useRef(io('ws://localhost:8080'))
    const scrollref = useRef()
    const msgTarget = currentMsger.id

    console.log(newMsg)

    // useEffect(()=> {})

    useEffect(()=>{
        socket.current.on('getMessage', data=>{
            console.log(data)
            const arrivalMsg = {
                sender_id:data.senderId,
                message: data.text
            }
            setConvoMsgs((msgs) => [...msgs, arrivalMsg])
            scrollref.current?.scrollIntoView({behavior: 'smooth'})
        })
    }, [socket])

    console.log(convoMsgs)

    // useEffect(()=>{
    //     arrivalMsg 
    // },[arrivalMsg])

    useEffect(()=>{
        socket.current.emit("addUser", userId);
        socket.current.on('getUsers', users=>{
            console.log(users)})
    }, [userId])


    const submitMsg = (event) =>{
        event.preventDefault();
        const msgInfo = {
            id: uuidv4(),
            sender_id: userId,
            message: newMsg,
            conversation_id: selectedConvo,

        }
        axios
        .post(`http://localhost:5050/messages/${selectedConvo}`, msgInfo)
        .then((response) =>{
            setConvoMsgs([...convoMsgs, response.data])
            setNewMsg('')
        })
        .then( ()=>{
            setCurrentMsger(currentMsger)
        })
        .then( 
            
            socket.current.emit('sendMsg', {
            senderId: userId,
            receiverId: msgTarget,
            text: newMsg
        }))
    }

    console.log(currentMsger)

    useEffect(()=>{
        scrollref.current?.scrollIntoView({behavior: 'smooth'})
    }, [convoMsgs])


  return (
    <div
      className="convo-container bg-black-50 w-screen h-screen pb-16 inset-y-0 absolute rounded-xl
    
                    md:h-80 md:w-80 md:inset-y-72 lg:inset-y-40 md:fixed md:pb-0"
    >
      <div className="flex justify-end rounded-tl-xl bg-gradient-to-b from-purple-50 to-white-100">
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
      <form onSubmit={submitMsg} className="flex items-center lg:rounded-bl-xl bg-gradient-to-t from-purple-50 to-gray-50 0 h-1/4">
        <textarea value={newMsg} onChange={(e) => setNewMsg(e.target.value)} className="h-5/6 w-3/4 p-1 rounded resize-none scrollbar-thin ml-2 text-black-50"></textarea>
        <button className="text-white-50 ml-3 bg-purple-50 h-1/2 px-5 rounded-full">
          Send
        </button>
      </form>
    </div>
  );
}
