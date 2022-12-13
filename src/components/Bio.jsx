import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Bio() {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const param = useParams()

  const [biography, setBiography] = useState("");
  
  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setBiography(response.data.biography);
      });
  }, []);

  return (
    <div className=" flex flex-col bg-gray-50 w-full h-full md:rounded-b-xl ">
      <div className=" h-full flex flex-col ">
        <p className="px-5 py-5 w-1/2  ">{biography}</p>
      </div>
    </div>
  );
}
