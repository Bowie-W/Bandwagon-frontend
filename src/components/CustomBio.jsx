import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CustomBio() {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const [customBiography, setCustomBiography] = useState('')
  const param = useParams()

  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setCustomBiography(response.data.biography);
      });
  }, []);



  return (
    <div className=" flex flex-col bg-gray-50 w-full h-3/4 rounded-b-xl ">
      <div className=" h-full flex flex-col ">
        <textarea value={customBiography} onChange={(e) => setCustomBiography(e.target.value)} placeholder="Tell us about yourself!" className="px-5 py-5 w-full h-full resize-none text-xl md:text-5xl "></textarea>
      </div>
    </div>
  );
}