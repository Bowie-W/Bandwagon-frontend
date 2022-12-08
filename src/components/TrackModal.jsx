import ProfilePic from "../assests/images/frank-ava.jpg";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function TrackModal({ handleTrackModal }) {

    const token = sessionStorage.getItem("authToken");
    const Serv_URL = "http://localhost:5050";

  function uploadTrack(event) {
    axios
      .post(`${Serv_URL}/profile/customize/tracks`, 
      {
        name: 'testing',
        id: uuidv4()
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        handleTrackModal()
        // setUser(response.data);
      });
  }
  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-black-50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white h-1/2 w-1/5 bg-white-50 flex flex-col items-center">
        <div className="flex justify-end w-full pr-3">
          <button onClick={handleTrackModal}>X</button>
        </div>
        <img
          className="w-40 h-40 object-cover rounded-full mt-5"
          src={ProfilePic}
          alt="profile pic"
        />
        <div>
          <form>
            <button
              className="text-center"
              type="click"
              onClick={uploadTrack}
            >
              Upload your Track
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
