import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Tracks({ tracks, primedTrack, setPrimedTrack, tokenInfo }) {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const [newTrack, setNewTrack] = useState(primedTrack)
  const param = useParams()


  useEffect(() => {

    if (tracks.length !== 0){
      axios
      .get(`${Serv_URL}/profile/tracks/single/${primedTrack.id}`)
      .then((response) => {
          console.log(response)
      })
    }

  }, [primedTrack]);

  const changeTrack = (event) => {

    const id = event.target.attributes.value.value
    axios
    .get(`${Serv_URL}/profile/tracks/single/${id}`)
    .then((response) => {
        setNewTrack(response.data.track[0])
    })
    
  }

  console.log(param.undefined)
  console.log(tokenInfo.id)

  return (
    <div className=" flex flex-col md:flex-row bg-gray-100 w-full h-full md:rounded-b-xl ">
      <div className="flex ml-5 w-10/12 items-center  md:w-1/2">
        <div className=" h-5/6 w-full md:mt-16 lg:mt-56 lg:h-5/6 flex flex-col  ">
          {tracks?.length !== 0 ? (
            <h2 className="pl-5  w-full text-3xl mt-4 lg:mt-5 text-white-50  text-xl md:text-3xl ">
              {newTrack?.name}
            </h2>
          ) : (
            <div>
              <h2 className="pl-5 w-full mt-5 text-xl text-white-50 md:text-3xl ">
                No Tracks Uploaded
              </h2>
              {tokenInfo.id === param.undefined ?
              <Link
                to={"/profile/customize"}
                className="flex ml-5 "
              >
                {" "}
                <button className="text-white-50 bg-purple-50 p-2 rounded-full">
                  Let's Fix That!
                </button>
              </Link>: null}
            </div>
          )}
          {tracks.length !== 0 ? (
            <ReactAudioPlayer
              controls
              src={newTrack?.track_audio}
              className=" w-5/6 lg:w-5/6 ml-5 mt-5 md:mt-16 lg:mt-5"
            />
          ) : null}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
      <div className="border w-5/6 overflow-scroll scrollbar-thin rounded-2xl">
        
        {tracks !== 0
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
