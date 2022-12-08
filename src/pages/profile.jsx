import Tracks from "../components/Tracks";
import Gear from "../components/Gear";
import Connections from "../components/Connections";
import BackPic from "../assests/images/frank-cover.webp";
import ProfilePic from "../assests/images/frank-ava.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Profile({ token }) {
  const navigate = useNavigate();
  const Serv_URL = "http://localhost:5050";
  const [user, setUser] = useState("");
  const [infoDisplay, setInfoDisplay] = useState(<Tracks />);

//   console.log(token);
  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    // console.log(user);
  }, [user]);

  function renderTracks() {
    setInfoDisplay(<Tracks />);
  }
  function renderGear() {
    setInfoDisplay(<Gear />);
  }
  function renderConnections() {
    setInfoDisplay(<Connections />);
  }

  //   useEffect(()=>{

  //   },[infoDisplay])

  return (
    <div
      className="flex flex-col md:flex-row h-screen"
      style={{
        backgroundImage: `url(${BackPic})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className=" w-screen h-screen bg-gray-100 pb-5 items-center rounded md:w-1/4 md:mt-5 md:ml-5">
        <div className="flex">
          <img
            className="avatar w-44 h-44 ml-5 mr-4 my-5 object-cover rounded-full md:w-52 md:h-52  md:my-5"
            src={ProfilePic}
            alt="profile pic"
          />

          <div className="w-full bg-gray-100">
            <div className="chips_container bg-black-50   text-gray-50 mt-12 mr-5  h-3/5 rounded-2xl px-3 md:mb-20 py-3">
              {user.profile_chips}
            </div>
          </div>
        </div>
        <h2 className="w-full h-1/8 text-center  text-white-50 text-3xl">
          {user.profile_name}
        </h2>
        <p className="short_descript mx-5 mt-5 rounded-2xl  text-gray-50 text-center mt-3">
          {user.profile_descript}
        </p>
      </div>
      <div className="w-full md:w-4/5">
        <div className="right_window w-full h-full bg-yellow md:my-5 md:mx-5 md:w-11/12">
          <div className="flex justify-around py-5 bg-black-50 text-white-50">
            <button onClick={renderTracks}>Tracks</button>
            <button onClick={renderGear}>Gear</button>
            {/* <button onClick={renderConnections}>Connections</button> */}
          </div>
          {infoDisplay}
        </div>
      </div>
    </div>
  );
}
