import Guitar from "../assests/images/guitar.jpg";
import { useState } from "react";
import GearModal from "./GearModal";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect } from "react";

export default function CustomGear({ token, user }) {
  const Serv_URL = "http://localhost:5050";
  const [imageSelected, setImageSelected] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [gear_description, setGear_description] = useState("");
  const [picInfo, setpicInfo] = useState("");

  console.log(gear_description);
  console.log(imageSelected);

  useEffect(() => {
    previewImage();
    console.log("image being set");
  }, [imageSelected]);

  const previewImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "Testing");
    formData.append("apikey", 933797642957498);
    formData.append("timestamp", Date.now());
    // time stamp and apikey as Number

    axios
      .post("https://api.cloudinary.com/v1_1/dl2liojkl/image/upload", formData)
      .then((res) => {
        setImagePreview(res.data.url);
      
      });
  };

  function uploadGear(event) {
    event.preventDefault();
    axios
      .post(
        `${Serv_URL}/profile/customize/Gear`,
        {
          gear_description: gear_description,
          id: uuidv4(),
          user_id: user.id,
          gear_pic: imagePreview
        }
      )
      .then((response) => {
        console.log(response);
        // setUser(response.data);
      });
  }
  return (
    <form
      onSubmit={uploadGear}
      className="bg-gray-50 w-full h-full flex flex-col md:flex-row text-white-50"
    >
      <div className="w-1/2">
        <div className="ml-5 mt-6">
          <input
            className="text-white-50 w-1/2 "
            type="file"
            name="image"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          ></input>
        </div>
        <img
          src={imagePreview}
          className="w-72 h-72 border border-white-50 ml-5 mt-2 rounded-xl"
        />
      </div>
      <div className="w-3/4 mt-5 ml-10 ">
        <h1 className="name mb-5 text-xl"> Tell us about your Instrument</h1>
        <textarea
          onChange={(e) => {
            setGear_description(e.target.value);
          }}
          className="description h-3/4 w-3/4 resize-none rounded-xl mt-3 text-black-50 p-2"
        ></textarea>
         <button
            type="click"
            className="h-10 px-3 rounded-3xl ml-7 bg-purple-50"
          >
            Add Gear
          </button>
       
      </div>
    </form>
  );
}
