import CustomTracks from "../components/CustomTracks";
import CustomGear from "../components/CustomGear";
import axios from "axios";
import { useState, useEffect } from "react";
import BackPic from "../assests/images/frank-cover.webp";
import AvatarModal from "../components/AvatarModal";
const { v4: uuid } = require("uuid");

export default function Customize({token}) {
  const [name, setName] = useState("Frank Ocean");
  const [tagline, setTagline] = useState(
    "singer, songwriter, and rapper. His works are noted by music critics for featuring avant-garde styles"
  );
  const Serv_URL = "http://localhost:5050";
  const [infoDisplay, setInfoDisplay] = useState(<CustomTracks />);
  const [modalStatus, setModalStatus] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
    .get(`${Serv_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
        console.log(response.data)
        setUser(response.data)
    });
  }, []);

  function addTrack(){
    axios  
    .post(`${Serv_URL}/profile/tracks`, {
        id: uuid(),
        track_audio: "example",
        name: "SongName"
        
    })
  }

  function renderCustomTracks() {
    setInfoDisplay(<CustomTracks />);
  }
  function renderCustomGear() {
    setInfoDisplay(<CustomGear />);
  }

  function handleModal() {
    if (modalStatus === false) {
      setModalStatus(true);
    } else {
      setModalStatus(false);
    }
  }

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BackPic})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
        {modalStatus &&(
            <AvatarModal handleModal={handleModal}/>)}
      <div className="flex h-screen">
        <div className="leftbar w-1/4 h-3/4 bg-red-500 items-center mt-5 ml-5 rounded-2xl">
          <div className="flex justify-center">
            <img
              className="w-30 h-30 object-cover"
              // src={ProfilePic}
              alt="profile pic"
            />
            <button onClick={handleModal}>Change Pic</button>
          </div>
          <form
            method="POST"
            action="http://localhost:5050/profile/customize"
            encType="multipart/form-data"
          >
            <input type="file" name="image"></input>
            <input type="submit"></input>
          </form>
          <form className="flex flex-col justify-center space-between justify-between items-center h-3/4">
            <textarea
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full h-1/4 text-center resize-none text-4xl py-4"
            ></textarea>
            <textarea
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
              className=" h-1/3 w-full text-center resize-none py-4"
            ></textarea>

            <div className="flex flex-col align-center">
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
              <p className="text-center">placeholderChip</p>
            </div>
            <button type="submit" className="h-10 w-20 rounded-3xl bg-blue-500">
              Update
            </button>
          </form>
        </div>
        <div className="w-3/4 h-3/4 bg-blue-500 mt-5 mx-5 rounded-2xl">
          <div className="flex justify-around py-5 bg-white border border-black rounded-t-2xl">
            <button onClick={renderCustomTracks}>Tracks</button>
            <button onClick={renderCustomGear}>Gear</button>
          </div>
          {infoDisplay}
        </div>
      </div>
    </div>
  );
}
