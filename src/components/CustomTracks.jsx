import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import TrackModal from "./TrackModal";
import Tracklist from "./Tracklist"
const { v4: uuid } = require("uuid");

export default function CustomTracks({user}) {
  const [trackname, setTrackName] = useState("");
  const [trackDescript, setTrackDescript] = useState("");
  const [trackAudio, setTrackAudio] = useState("");
  const [trackUrl, setTrackUrl] = useState('')
  const Serv_URL = "http://localhost:5050";

  useEffect(() => {
    cloudUpload()
    console.log('Track Primed')
  }, [trackAudio])

  const cloudUpload = () => {
    const formData = new FormData()
    formData.append("file", trackAudio);
    formData.append("upload_preset", "Testing");
    formData.append("apikey", 933797642957498);
    formData.append("timestamp", Date.now());

    axios
    .post("https://api.cloudinary.com/v1_1/dl2liojkl/video/upload", formData)
    .then((res) => {
      setTrackUrl(res.data.url)
      console.log(res.data.url)
    })
  };

  const trackInfo = {
    id: uuid(),
    user_id: user.id,
    track_audio: trackUrl,
    name: trackname,
    description: trackDescript,

  }

  const uploadTrack = (event) => {
    event.preventDefault()
    axios
    .post(`${Serv_URL}/profile/customize/tracks`, trackInfo)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log('Error Adding Track');
    });
  }

  return (
    <div onSubmit={uploadTrack} className=" flex flex-col bg-gray-50 w-full h-full ">
      <form className="flex">
        <div className="flex flex-col w-full">
          <textarea
          placeholder="Name of Track Here"
            onChange={(e) => setTrackName(e.target.value)}
            value={trackname}
            className="text-xl px-5 text-gray-50 py-5 w-5/6 bg-black-50 resize-none mt-5 ml-5 rounded"
          ></textarea>
          <div className="w-5/6 flex justify-between mt-5 ml-5">
            <input
              type="file"
              name="audio"
              onChange={(e) => {
                setTrackAudio(e.target.files[0]);
              }}
            ></input>

            <button
              type="submit"
              onClick={cloudUpload}
              className="h-10 w-36 rounded-3xl text-white-50 bg-purple-50 mt-5"
            >
              Add Track
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
}
