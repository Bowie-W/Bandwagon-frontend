import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CustomBio() {
  const Serv_URL = "http://localhost:5050";
  const token = sessionStorage.getItem("authToken");
  const [customBiography, setCustomBiography] = useState("");
  const [customBioId, setCustomBioId] = useState('')
  const param = useParams();

  const bioInfo = {
    id: customBioId,
    biography: customBiography
  }


  useEffect(() => {
    axios
      .get(`${Serv_URL}/profile/${param.undefined}`)
      .then((response) => {
        console.log(response);
        setCustomBiography(response.data.biography);
        setCustomBioId(response.data.id)
      });
  }, []);

  const editBio = (event) => {
    event.preventDefault()
    axios
    .put(`${Serv_URL}/profile/customize/bio`, bioInfo)
    .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className=" flex flex-col bg-gray-50 w-full h-full  rounded-b-2xl ">
      <form onSubmit={editBio} className=" h-full flex flex-col bg-gray-50 md:pb-5 items-end ">
        <textarea
          value={customBiography}
          onChange={(e) => setCustomBiography(e.target.value)}
          placeholder="Tell us about yourself!"
          className="px-5 py-5 w-full h-5/6 bg-gray-100 border-white-50 border text-gray-50 resize-none text-base md:text-lg "
        ></textarea>
        <button type="submit" className="text-white-50 bg-purple-50 mt-5 mr-2 p-2 rounded-full md:w-1/3">
        Confirm Bio Changes
      </button>
      </form>
    </div>
  );
}
