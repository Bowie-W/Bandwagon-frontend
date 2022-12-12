import CustomTracks from "../components/CustomTracks";
import CustomGear from "../components/CustomGear";
import axios from "axios";
import { useState, useEffect } from "react";
import BackPic from "../assests/images/frank-cover.webp";
import AvatarModal from "../components/AvatarModal";
import CustomBio from "../components/CustomBio";
import { Link, useParams } from "react-router-dom";
const { v4: uuid } = require("uuid");


export default function Customize({ token }) {
  const Serv_URL = "http://localhost:5050";
  const [infoDisplay, setInfoDisplay] = useState(<CustomBio />);
  const [modalStatus, setModalStatus] = useState(false);
  const [user, setUser] = useState({});
  const [prof_pic, setProf_pic] = useState("");
  const [prof_name, setProf_name] = useState("");
  const [descript, setDescript] = useState("");
  const [chips, setChips] = useState("");
  // const [avatarChanged, setAvatarChanged] = useState(false)

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/:username`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    setChips(user.profile_chips);
    setProf_name(user.profile_name);
    setDescript(user.profile_descript);
    setProf_pic(user.profile_pic);
  }, [user, modalStatus]);

  function renderCustomTracks() {
    setInfoDisplay(<CustomTracks />);
  }
  function renderCustomGear() {
    setInfoDisplay(<CustomGear />);
  }
  function renderCustomBio() {
    setInfoDisplay(<CustomBio />);
  }

  function handleModal() {
    if (modalStatus === false) {
      setModalStatus(true);
    } else {
      setModalStatus(false);
    }
  }

  function updateLeftBar(event) {
    const updatedProfInfo = {
      id: user.id,
      profile_name: prof_name,
      profile_descript: descript,
      profile_chips: chips,

    };
    // event.preventDefault()
    axios
      .put(`${Serv_URL}/profile/customize/`, updatedProfInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
      {modalStatus && <AvatarModal handleModal={handleModal} user={user} />}
      <div className="flex h-screen">
        <div className="leftbar w-1/4 h-3/4 bg-red-500 items-center mt-5 ml-5 rounded-2xl lg:h-5/6">
          <div className="flex md:flex-col lg:justify-center lg:items-center">
            <img
              className="avatar w-44 h-44 lg:w-44 lg:h-44 ml-5 mr-4 my-5 object-cover rounded-full md:w-36 md:h-36  md:my-5"
              src={prof_pic}
              alt="profile pic"
            />
            <button onClick={handleModal}>Change Pic</button>

            <div className="w-full md:h-1/3 bg-black-50 flex justify-center">
              <textarea
                onChange={(e) => setChips(e.target.value)}
                value={chips}
                className="chips_container bg-black-50  h-3/5 rounded-2xl  resize-none px-3 py-3 text-gray-50 mt-12 mr-5 md:mr-0 md:text-center md:mt-0 md:pt-2 "
              ></textarea>
            </div>
          </div>
          <form  onSubmit={updateLeftBar} className="flex flex-col justify-center space-between lg:justify-start justify-between items-center h-3/4 lg:h-1/2">
            <textarea
              onChange={(e) => setProf_name(e.target.value)}
              value={prof_name}
              className="w-full h-1/4 text-center resize-none text-4xl py-4"
            ></textarea>
            <textarea
              onChange={(e) => setDescript(e.target.value)}
              value={descript}
              className=" h-1/3 w-full text-center resize-none py-4"
            ></textarea>
            <div className="">
              <button
                type="submit"
                className="h-10 w-20 rounded-3xl bg-blue-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="w-3/4 h-3/4 bg-blue-500 mt-5 mx-5 rounded-2xl">
          <div className="flex justify-around py-5 bg-white border border-black rounded-t-2xl">
            <button onClick={renderCustomBio}>Bio</button>
            <button onClick={renderCustomTracks}>Tracks</button>
            <button onClick={renderCustomGear}>Gear</button>
          </div>
          {infoDisplay}
          <Link to="/profile/username">
            <button className="">Return to Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
