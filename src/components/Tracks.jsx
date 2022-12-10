import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Tracks() {
  const Serv_URL = "http://localhost:5050";
  const [tracks, setTracks] = useState([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTracks(response.data.userTracks);
      });
  }, []);

//   console.log(tracks)

  return (
    <div className=" flex flex-col bg-gray-50 w-full h-full rounded-b-xl ">
      {/* Map out all tracks */}
      <div className=" h-full flex flex-col ">
        <h2 className="px-5 py-5 w-1/2 text-xl md:text-5xl ">Track Name</h2>
        <ReactAudioPlayer autoPlay controls className="h-10 ml-5" />
      </div>
    </div>
  );
}
