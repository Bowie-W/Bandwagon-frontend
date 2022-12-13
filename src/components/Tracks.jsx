import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tracklist from "./Tracklist";

export default function Tracks({ tracks, primedTrack }) {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  // const [primedTrack, setPrimedTrack] = useState("")
  // const [tracks, setTracks] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`${Serv_URL}/profile/tracks`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {

  //       setTracks(response.data.userTracks);
  //       setPrimedTrack(response.data.userTracks[1])
  //     })
  // }, []);

  console.log(tracks);
  console.log(primedTrack);

  return (
    <div className=" flex bg-gray-50 w-full h-full md:rounded-b-xl ">
      {/* Map out all tracks */}
      <div className="flex items-center w-1/2">
        <div className=" h-5/6 w-full  lg:h-5/6 flex flex-col ">
          {tracks.length !== 0 ? (
            <h2 className="px-5 w-full mb-10 text-xl md:text-3xl ">
              {primedTrack.name}
            </h2>
          ) : (
            <div>
              <h2 className="px-5 w-full mb-10 text-xl md:text-3xl ">
                Looks like you don't have any Tracks Uploaded T_T
              </h2>
              <Link
                to={"/profile/customize"}
                className="flex ml-5 "
              >
                {" "}
                <button className="text-white-50 bg-purple-50 p-2 rounded-full">
                  Let's Fix That!
                </button>
              </Link>
            </div>
          )}
          {tracks.length !== 0 ? (
            <ReactAudioPlayer
              controls
              src={primedTrack.track_audio}
              className="h-10 w-full lg:w-5/6 ml-5 lg:mt-14"
            />
          ) : null}
        </div>
      </div>
      <Tracklist tracks={tracks} primedTrack={primedTrack} />
    </div>
  );
}
