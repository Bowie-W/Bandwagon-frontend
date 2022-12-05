import Tracks from "../components/Tracks";
import Gear from "../components/Gear";
import Connections from "../components/Connections";
import BackPic from "../assests/images/frank-cover.webp";
import ProfilePic from "../assests/images/frank-ava.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Profile({ token }) {
  const navigate = useNavigate();
  const Serv_URL = "http://localhost:5050";
  const [user, setUser] = useState(null);
  const [infoDisplay, setInfoDisplay] = useState(<Tracks/>)

  //   useEffect(() => {
  //     axios
  //     .get(`${Serv_URL}/profile`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((response) => {
  //         console.log(response)
  //         setUser(response.data.user)
  //     });
  //   }, []);

  function renderTracks(){
    setInfoDisplay(<Tracks/>)
  }
  function renderGear(){
    setInfoDisplay(<Gear/>)
  }
  function renderConnections(){
    setInfoDisplay(<Connections/>)
  }

//   useEffect(()=>{

//   },[infoDisplay])

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BackPic})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="flex h-screen">
        <div className="leftbar w-1/4 h-4/5 bg-red-500 items-center mt-5 ml-5 rounded">
          <div className="flex justify-center">
            <img
              className="avatar w-30 h-30 object-cover"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>

          <h2 className="name w-full h-1/8 text-center text-4xl py-4">
            Frank Ocean
          </h2>
          <p className="short_descript mx-5 mb-7 rounded-2xl">
            singer, songwriter, and rapper. His works are noted by music critics
            for featuring avant-garde styles 
          </p>

          <div className="chips_container flex flex-col align-center h-auto mx-5 border-2 py-3">
            <p className="text-center">placeholderChip</p>
            <p className="text-center">placeholderChip</p>
            <p className="text-center">placeholderChip</p>
            <p className="text-center">placeholderChip</p>
          </div>
        </div>
        <div className="right_window w-3/4 h-3/5 bg-blue-500 mt-5 mx-5 ">
          <div className="flex justify-around py-5 bg-white">
            <button onClick={renderTracks}>Tracks</button>
            <button onClick={renderGear}>Gear</button>
            <button onClick={renderConnections}>Connections</button>
          </div>
          {infoDisplay} 
        </div>
      </div>
    </div>
  );
}
