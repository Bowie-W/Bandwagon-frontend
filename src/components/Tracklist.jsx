import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function Tracklist () {

    const Serv_URL = "http://localhost:5050";
    const [tracks, setTracks] = useState();
    const token = sessionStorage.getItem("authToken");
    const [primedTrack, setPrimedTrack] = useState("")


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

      console.log(tracks)

    return(
        <div className="w-1/2 h-full flex justify-center items-center">
            <div className="border w-5/6 h-5/6 overflow-scroll scrollbar-thin">
            {tracks !== undefined? tracks.map((track_info) => (
                <div className="bg-black-50 p-5 border border-white-50 text-white-50">{track_info.name}</div>
            )):null}
            </div>

        </div>
    )
}