import Tracks from "../components/Tracks";
import Gear from "../components/Gear";
import Bio from "../components/Bio"
import Connections from "../components/Connections";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Profile({ token }) {
  const navigate = useNavigate();
  const Serv_URL = "http://localhost:5050";
  const [user, setUser] = useState("");
  const [infoDisplay, setInfoDisplay] = useState(<Bio />);
  const [gear, setGear] = useState([]);
  const [primedTrack, setPrimedTrack] = useState("")
  const [tracks, setTracks] = useState({});
  const param = useParams()



//   console.log(token);
  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setUser(response.data);
        const username = response.data.username

      });
  }, []);


  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/:username/gear`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGear(response.data.userGear);
        console.log(response.data);
      });
  }, []);


    useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        
        setTracks(response.data.userTracks);
        setPrimedTrack(response.data.userTracks[1])
      })
  }, []);
  useEffect(() => {
    // console.log(user);
  }, [user]);

  function renderTracks() {
    setInfoDisplay(<Tracks tracks={tracks} primedTrack={primedTrack}/>);
  }
  function renderGear() {
    setInfoDisplay(<Gear gear={gear}/>);
  }


  function renderBio() {
    setInfoDisplay(<Bio/>);
  }

  //   useEffect(()=>{

  //   },[infoDisplay])

  return (
    <div
      className="flex flex-col md:flex-row h-screen bg-gray-100"
    //   style={{
    //     backgroundImage: `url(${BackPic})`,
    //     backgroundSize: "cover",
    //     height: "100vh",
    //     width: "100vw",
    //   }}
    >
      <div className="leftbar w-screen h-screen bg-black-50 pb-5 items-center md:rounded-xl md:w-1/4 md:mt-5 md:ml-5 md:h-5/6 md:pb-0">
        <div className="flex md:flex-col lg:justify-center lg:items-center">
          <img
            className="avatar w-44 h-44 lg:w-44 lg:h-44 ml-5 mr-4 my-5 object-cover rounded-full md:w-36 md:h-36  md:my-5"
            src={user.profile_pic}
            alt="profile pic"
          />

          <div className="w-full md:h-1/3 bg-black-50">
            <div className="chips_container bg-black-50  h-3/5 rounded-2xl px-3 py-3 text-white-50 mt-12 mr-5 md:mr-0 md:text-center md:mt-0 md:pt-2 ">
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
        <Link to={'/profile/customize'} className="flex justify-center mt-5 "> <button className="text-white-50 bg-purple-50 p-2 rounded-full">Customize</button></Link>
       
      </div>
      
        <div className="right_window w-full h-full md:my-5 md:mx-5 md:w-11/12 md:h-1/2" >
          <div className="flex justify-around py-5 bg-black-50 text-white-50 border border-gray-50 md:rounded-t-xl">
          <button onClick={renderBio}>Bio</button>
            <button onClick={renderTracks}>Tracks</button>
            <button onClick={renderGear}>Gear</button>
          </div>
          {infoDisplay}
        </div>
  
    </div>
  );
}
