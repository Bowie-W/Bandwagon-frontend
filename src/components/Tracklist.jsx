import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Tracklist({primedTrack, setPrimedTrack}) {
  const Serv_URL = "http://localhost:5050";
  const [tracks, setTracks] = useState();
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
        // setPrimedTrack(response.data.userTracks[0]);
      });
  }, []);

  const changeTrack = (event) => {
    // console.log(event.target.attributes.value.value)
    const id = event.target.attributes.value.value
    axios
    .get(`${Serv_URL}/profile/tracks/single/${id}`)
    .then((response) => {
        console.log(response.data.track[0].track_audio)
        setPrimedTrack(response.data.track[0].track_audio)
    })
    
  }

  console.log(primedTrack);



  return (
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
  );
}
