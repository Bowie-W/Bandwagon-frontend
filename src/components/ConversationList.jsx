import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ConversationSection from "./ConversationSection";

export default function ConversationList({ convos, userID, user, setUser }) {
  useEffect(() => {
    const arr = [];

    for (let i = 0; i < convos.length; i++) {
      if (convos[i].sender_id !== userID) {
        let friendID = convos[i].sender_id;
        arr.push({id:friendID});
      } else {
        let friendID = convos[i].receiver_id;
        arr.push({id:friendID});
      }
    }
    console.log(arr);
    setUser(arr);
    console.log(user);
  }, []);

  useEffect(() => {
    for (let i = 0; i < user.length; i++) {
      axios
        .post(`http://localhost:5050/users/conversation/list`,
        {user} )
        .then((response) => {
          console.log(response);
        });
    }
  }, [user]);

  console.log(convos);
  console.log(user);

  return (
    <div className="mt-16">
      {user?.map((user_info) => {
        return (
          <div className="  flex text-black-50 ml-2 my-3 " key={user_info.id}>
            <div className="topbar w-1/6 flex-shrink-0">
              <img
                className="rounded-full w-12 h-12 object-cover mr-5 flex-shrink-0"
                src="https://res.cloudinary.com/dl2liojkl/image/upload/v1670954555/tsultan_ufsood.jpg"
              ></img>
            </div>
            <div className="bottombar  flex flex-col max-w-xs ">
              <p className="name text-white-50">Test Name</p>
              <p className="messagetext truncate text-s bg-purple-50 ">
                {user_info.friendID}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
