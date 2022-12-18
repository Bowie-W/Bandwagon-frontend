import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect } from "react";

export default function CustomGear({ token, user }) {
  const Serv_URL = "http://localhost:5050";
  const [imageSelected, setImageSelected] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [gear_description, setGear_description] = useState("");


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

    axios
      .post("https://api.cloudinary.com/v1_1/dl2liojkl/image/upload", formData)
      .then((res) => {
        setImagePreview(res.data.url);
      });
  };

  function uploadGear(event) {
    event.preventDefault();
    axios
      .post(`${Serv_URL}/profile/customize/Gear`, {
        gear_description: gear_description,
        id: uuidv4(),
        user_id: user.id,
        gear_pic: imagePreview,
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <form
      onSubmit={uploadGear}
      className="bg-gray-50 w-full h-full flex flex-col md:flex-row text-white-50"
    >
      <div className=" w-full md:w-1/2">
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
          className="w-56 h-56  ml-5 mt-2"
        />
      </div>
      <div className="flex mx-5 h-full">
        {" "}
        <div className="w-3/4 mt-2 h-full ">
          <h1 className="name text-xl mb-1"> Tell us about your Instrument</h1>
          <textarea
            onChange={(e) => {
              setGear_description(e.target.value);
            }}
            className="description h-3/4 w-full resize-none rounded-xl text-black-50 p-2"
          ></textarea>
         
          
        </div>
        <button
            type="click"
            className="h-10 w-1/4 h-14 md:w-1/3 rounded-3xl md:ml-2 lg:ml-7 md:mt-16 lg:ml-24 bg-purple-50"
          >
            Add Gear
          </button>
      </div>
    </form>
  );
}
