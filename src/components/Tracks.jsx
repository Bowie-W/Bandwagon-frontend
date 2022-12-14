import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tracklist from "./Tracklist";

export default function Tracks({ tracks, primedTrack, setPrimedTrack }) {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const [newTrack, setNewTrack] = useState(primedTrack)
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

  // console.log(tracks);
  // console.log(primedTrack);

  useEffect(() => {

    console.log(primedTrack.id)
       axios
    .get(`${Serv_URL}/profile/tracks/single/${primedTrack.id}`)
    .then((response) => {
        console.log(response)
    })

  }, [primedTrack]);

  const changeTrack = (event) => {
    // console.log(event.target.attributes.value.value)
    const id = event.target.attributes.value.value
    axios
    .get(`${Serv_URL}/profile/tracks/single/${id}`)
    .then((response) => {
        console.log(response.data.track[0].track_audio)
        // setPrimedTrack(response.data.track[0].track_audio)
        setNewTrack(response.data.track[0])
    })
    
  }


  return (
    <div className=" flex bg-gray-50 w-full h-full md:rounded-b-xl ">
      {/* Map out all tracks */}
      <div className="flex items-center w-1/2">
        <div className=" h-5/6 w-full  lg:h-5/6 flex flex-col ">
          {tracks?.length !== 0 ? (
            <h2 className="px-5 w-full mb-10 text-xl md:text-3xl ">
              {newTrack?.name}
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
              src={newTrack?.track_audio}
              className="h-10 w-full lg:w-5/6 ml-5 lg:mt-14"
            />
          ) : null}
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
      <div className="border w-5/6 h-5/6 overflow-scroll scrollbar-thin">
        {tracks !== undefined
          ? tracks.map((track_info) => (
              <div
                className="bg-black-50 p-5 border border-white-50 text-white-50"
                key={track_info.id}
                value={track_info.id}
                onClick={changeTrack}
              >
                {track_info.name}
              </div>
            ))
          : null}
      </div>
    </div>
    </div>
  );
}
