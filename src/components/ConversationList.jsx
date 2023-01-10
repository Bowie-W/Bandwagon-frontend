import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ConversationSection from "./ConversationSection";

export default function ConversationList({ convos, userId, messengers, messengerProfile, handleMessages}) {
  // const [messengers, setMessengers] = useState([]);
  // const [messengerProfile, setmessengerProfile] = useState([]);

  // useEffect(() => {
  //   const arr = [];

  //   for (let i = 0; i < convos.length; i++) {
  //     if (convos[i].sender_id !== userId) {
  //       let friendID = convos[i].sender_id;
  //       arr.push({ id: friendID });
  //     } else {
  //       let friendID = convos[i].receiver_id;
  //       arr.push({ id: friendID });
  //     }
  //   }
  //   console.log(arr);
  //   setMessengers(arr);
  //   console.log(messengers);
  // }, []);

  // useEffect(() => {
  //   const msgArray = [];

  //   for (let i = 0; i < messengers.length; i++) {
  //     axios
  //       .get(`http://localhost:5050/users/${messengers[i].id}`)
  //       .then((response) => {
  //         msgArray.push(response.data);
  //       });
  //   }

  //   setmessengerProfile(msgArray);
  // }, [messengers]);

  console.log(messengerProfile);



  return (
    <div className="mt-16 ml-3 md:mr-4 rounded-xl absolute w-11/12 md:w-64 h-64  bg-gradient-to-t from-purple-50 to-gray-50 -inset-y-0 z-30">
      {convos.length !== 0 ? messengerProfile?.map((user_info) => {
        return (
          <div value={user_info.convo_id} onClick={handleMessages} className="  flex text-black-50 mx-2 my-3 border border-white-50 p-1 rounded-xl" key={user_info.id}>
            <div value={user_info.convo_id} className="topbar w-1/6 flex-shrink-0">
              <img
                className="rounded-full w-12 h-12 object-cover mr-5 flex-shrink-0"
                src={user_info.profile_pic}
                value={user_info.convo_id}
              ></img>
            </div>
            <div value={user_info.convo_id} className="bottombar  flex flex-col justify-center ml-5 max-w-xs ">
              <p value={user_info.convo_id} className="name text-white-50">{user_info.profile_name}</p>
              {/* <p className="messagetext text-center truncate text-s bg-purple-50 ">
                {user_info.friendID}
              </p> */}
            </div>
          </div>
        );
      }): <p className="  flex  mx-2 my-3 border justify-center border-white-50 p-1 rounded-xl" >No Conversations Start Yet</p>}
    </div>
  );
}
