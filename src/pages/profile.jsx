import Tracks from "../components/Tracks";
import Gear from "../components/Gear";
import Bio from "../components/Bio";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
const { v4: uuid } = require("uuid")


export default function Profile({newConvoId, setNewConvoId, token, firstContactStatus, setFirstContactStatus }) {
  const Serv_URL = "http://localhost:5050";
  const [user, setUser] = useState("");
  const [infoDisplay, setInfoDisplay] = useState(<Bio />);
  const [gear, setGear] = useState([]);
  const [primedTrack, setPrimedTrack] = useState("");
  const [tokenInfo, setTokenInfo] = useState("");
  const [tracks, setTracks] = useState({});
  const [genreChips, setGenreChips] = useState([]);
  const [instrChips, setInstrChips] = useState([]);
  const param = useParams();

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.undefined}`)
      .then((response) => {
        setUser(response.data);
        const genreChipsString = response.data.genreChips;
        const genreChipsArray = genreChipsString.split(",");
        const instrChipsString = response.data.instrChips;
        const instrChipsArray = instrChipsString.split(",");
        setGenreChips(genreChipsArray);
        setInstrChips(instrChipsArray);

      })
      .then(setInfoDisplay(<Bio />));
  }, [param.undefined]);

  useEffect(() => {
    const decodedToken = jwtDecode(token);
    setTokenInfo(decodedToken);
  }, [param.undefined]);

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.undefined}/gear`)
      .then((response) => {
        setGear(response.data.userGear);
        // console.log(response.data);
      });
  }, [param.undefined]);

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/tracks/${param.undefined}`)
      .then((response) => {
        setTracks(response.data.userTracks);
        setPrimedTrack(response.data.userTracks[0]);
      });
  }, [param.undefined]);
  useEffect(() => {}, [user]);


  // console.log(user)

  useEffect(() => {
    if (tracks.length !== 0) {
      axios
        .get(`${Serv_URL}/profile/tracks/single/${primedTrack.id}`)
        .then((response) => {});
    }
  }, [primedTrack]);

  const handleNewChat = (event) => {
    event.preventDefault()
    const chatId = uuid()
    const convoIds = {
      contactId: user.id,
      userId:tokenInfo.id
    }
    axios
    .post('http://localhost:5050/conversations/check', convoIds)
    .then((response) => {
      if (response.data.length === 0){
        const convoInfo = {
          id: chatId,
          sender_id:tokenInfo.id,
          receiver_id:user.id
        }
        axios
        .post('http://localhost:5050/conversations', convoInfo)
        .then((response) =>{
          setFirstContactStatus(true)
          setNewConvoId(chatId)
        })

      }
    })

  
console.log(firstContactStatus)
    
  }

  function renderTracks() {
    setInfoDisplay(
      <Tracks
        tracks={tracks}
        primedTrack={primedTrack}
        setPrimedTrack={setPrimedTrack}
        tokenInfo={tokenInfo}
      />
    );
  }
  function renderGear() {
    setInfoDisplay(<Gear gear={gear} tokenInfo={tokenInfo} />);
  }

  function renderBio() {
    setInfoDisplay(<Bio />);
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-purple-50 to-black-50">
      <div className="leftbar w-screen h-screen bg-black-50 pb-5 items-center md:rounded-xl md:w-1/4 md:mt-5 md:ml-5 md:h-5/6 md:pb-0">
        <div className="flex md:flex-col md:justify-center md:items-center">
          <img
            className="avatar w-1/2 h-1/2 md:w-28 md:h-28 lg:w-44 lg:h-44 ml-4 mr-4 my-5 object-cover rounded-xl md:w-36 md:h-36  md:my-5"
            src={user.profile_pic}
            alt="profile pic"
          />

          <div className="w-full flex flex-col justify-center md:items-center md:h-1/3 bg-black-50">
            <div>
              {genreChips.map((genreChip) => (
                <button
                  key={genreChip}
                  type="click"
                  className=" text-center rounded-2xl text-white-50 px-3 py-1 bg-gray-50 mr-2 my-1"
                >
                  {genreChip}
                </button>
              ))}
            </div>
            <div>
              {" "}
              {instrChips.map((instrChip) => (
                <button
                  key={instrChip}
                  type="click"
                  className=" text-center rounded-2xl text-white-50 px-3 py-1 bg-purple-100 mr-2 my-1"
                >
                  {instrChip}
                </button>
              ))}
            </div>
          </div>
        </div>
        <h2 className="w-full h-1/8 text-center break-words px-5 text-white-50 text-3xl">
          {user.profile_name}
        </h2>
        <p className="short_descript mx-5 mt-5 rounded-2xl  text-gray-50 text-center mt-3">
          {user.profile_descript}
        </p>
        {tokenInfo.id === param.undefined ? (
          <div className="flex justify-center">
            <Link
              to={`/profile/customize/${tokenInfo.id}`}
              className="flex justify-center mt-5 lg:mt-2 "
            >
              {" "}
              <button className="text-white-50 bg-purple-50 p-2 rounded-full">
                Customize
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center mt-5 ">
            <Link>
              <button onClick={handleNewChat} className="text-white-50 bg-purple-50 p-2 rounded-full">
                Contact
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="right_window w-full h-full md:my-5 md:mx-5 md:w-4/6 lg:11/12 md:h-4/6">
        <div className="flex border-t border-t-white-50 h-10 lg:h-12 justify-around bg-black-50 text-white-50 md:rounded-t-xl">
          <button
            className="focus:bg-purple-50 md:focus:rounded-tl-xl border-r border-r-white-50 w-1/3 h-full"
            onClick={renderBio}
          >
            Bio
          </button>
          <button
            className="focus:bg-purple-50 border-r border-r-white-50 w-1/3"
            onClick={renderTracks}
          >
            Tracks
          </button>
          <button
            className="focus:bg-purple-50 md:focus:rounded-tr-xl w-1/3"
            onClick={renderGear}
          >
            Gear
          </button>
        </div>
        {infoDisplay}
      </div>
    </div>
  );
}
