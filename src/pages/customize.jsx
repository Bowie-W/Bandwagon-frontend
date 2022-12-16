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
  const param = useParams()
  // const [avatarChanged, setAvatarChanged] = useState(false)

  // useEffect(() => {
  //   axios
  //     .get(`${Serv_URL}/profile/:username`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setUser(response.data);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.undefined}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  }, [param.undefined]);

  useEffect(() => {
    setChips(user.profile_chips);
    setProf_name(user.profile_name);
    setDescript(user.profile_descript);
    setProf_pic(user.profile_pic);
  }, [user, modalStatus]);

  function renderCustomTracks() {
    setInfoDisplay(<CustomTracks user={user}/>);
  }
  function renderCustomGear() {
    setInfoDisplay(<CustomGear user={user} token={token}/>);
  }
  function renderCustomBio() {
    setInfoDisplay(<CustomBio user={user}/>);
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
    <div className="bg-gray-100 pt-10"
      // className=""
      // style={{
      //   backgroundImage: `url(${BackPic})`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   width: "100vw",
      // }}
    >
      {modalStatus && <AvatarModal handleModal={handleModal} user={user} />}
      <div className="flex h-screen flex-col md:flex-row">
        <div className="leftbar w-screen h-screen bg-black-50 pb-5 items-center md:rounded-xl md:w-1/4 md:mt-5 md:ml-5 md:h-5/6 md:pb-0">
          <div className="flex md:flex-col lg:justify-center lg:items-center">
            <div className="w-full flex flex-col items-center">
            <img
              className="avatar w-44 h-44 lg:w-44 lg:h-44 ml-5 mr-4 my-5 object-cover rounded-full md:w-36 md:h-36  md:my-5"
              src={prof_pic}
              alt="profile pic"
            />
             <button onClick={handleModal} className="text-white-50 h-10 w-24 mb-5 rounded-3xl bg-purple-50">Change Pic</button>
            </div>

            <div className="w-full md:h-1/3 md:mx-5 bg-black-50 flex justify-center">
              <textarea
                onChange={(e) => setChips(e.target.value)}
                value={chips}
                placeholder='Place Instruments/Genres you play here!'
                className="chips_container bg-black-50  border border-white-50 h-2/5 rounded-2xl overflow-y-scroll scrollbar-thin w-full  resize-none px-3 py-0 text-gray-50 mt-12 mr-5 md:mr-0 md:text-center md:mt-0 md:pt-2 "
              ></textarea>
            </div>
          </div>
          <form  onSubmit={updateLeftBar} className="flex flex-col mx-5 lg:justify-start items-center h-2/3 lg:h-1/2">
            <textarea
              onChange={(e) => setProf_name(e.target.value)}
              value={prof_name}
              className="w-full h-1/4 text-center text-gray-50 bg-black-50 border border-white-50 rounded  resize-none text-4xl py-2"
            ></textarea>
            <textarea
              onChange={(e) => setDescript(e.target.value)}
              value={descript}
              placeholder='Give people a tagline to remember you by !'
              className=" h-1/4 border border-white-50  rounded w-full text-center overflow-y-scroll scrollbar-thin text-gray-50 resize-none py-4 bg-black-50"
            ></textarea>
            <div className="">
              <button
                type="submit"
                className="h-10 w-20 rounded-3xl text-white-50 mt-3 md:mt-0 bg-purple-50 lg:mt-5"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="right_window w-full h-full md:my-5 md:mx-5 md:w-11/12 md:h-1/2">
          <div className="flex justify-around bg-black-50 text-white-50 border border-gray-50 md:rounded-t-xl">
            <button className="focus:bg-purple-50  border-r border-r-white-50 w-1/3" onClick={renderCustomBio}>Bio</button>
            <button className="focus:bg-purple-50 border-r border-r-white-50 w-1/3" onClick={renderCustomTracks}>Tracks</button>
            <button className="focus:bg-purple-50 border-r border-r-white-50 w-1/3" onClick={renderCustomGear}>Gear</button>
          </div>
          {infoDisplay}
          <div className="bg-gray-50 md:pl-5 flex mb-5 pb-5 pl-2 md:justify-end md:py-5 md:rounded-b-xl">
          <Link to={`/profile/${user.id}`}>
            <button className="h-10 text-white-50 px-2 rounded-3xl mr-5 border border-white-50 bg-gray-50 ">Return to Profile</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
