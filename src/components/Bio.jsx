import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bio() {
  const Serv_URL = "http://localhost:5050";
  const [tracks, setTracks] = useState([]);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/:username`, {
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
    <div className=" flex flex-col bg-gray-50 w-full h-full md:rounded-b-xl ">
      <div className=" h-full flex flex-col ">
        <h2 className="px-5 py-5 w-1/2 text-xl md:text-5xl ">Bio</h2>
      </div>
    </div>
  );
}
