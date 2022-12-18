import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Bio() {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const param = useParams()

  const [biography, setBiography] = useState("");
  
  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.undefined}`)
      .then((response) => {
        setBiography(response.data.biography);
      });
  }, [param.undefined]);

  return (
    <div className=" flex flex-col bg-gray-100 w-full h-full md:rounded-b-xl ">
      <div className=" h-full flex flex-col ">
        <p className="px-5 py-5 w-full text-white-50 ">{biography}</p>
      </div>
    </div>
  );
}
