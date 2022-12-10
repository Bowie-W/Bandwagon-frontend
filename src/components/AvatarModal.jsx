import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AvatarModal({ handleModal, user }) {
  const [imageSelected, setImageSelected] = useState("");
  const [imagePreview, setImagePreview] = useState(user.profile_pic);
  const [picInfo, setpicInfo] = useState({});
  const Serv_URL = "http://localhost:5050";

  useEffect(() => {
    previewImage();
    console.log('image being set')
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
        setpicInfo({
          id: user.id,
          profile_pic: res.data.url,
        });
        setImagePreview(res.data.url);
      });
  };

  const uploadImage = () => {
    axios
      .put(`${Serv_URL}/profile/customize/avatar`, picInfo)
      .then((res) => {
        console.log(res);
        handleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-black-50 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-100 h-1/2 w-1/5 flex flex-col items-center rounded-2xl">
        <div className="flex w-full">
          <div className="w-4/5"></div>
          <div className=" text-center w-7 mt-2 ml-4 rounded-full text-white-50 border border-white-50 bg-purple-50">
            <button onClick={handleModal}>X</button>
          </div>
        </div>
        <img
          className="w-40 h-40 object-cover rounded-full"
          src={imagePreview}
          alt="profile pic"
        />
        <div>
          <input
            className=" pl-20 my-5 text-white-50 "
            type="file"
            name="image"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          ></input>
        </div>
        <button
          className="border border-black-50 bg-purple-50 text-white-50 rounded-full h-10 w-1/3"
          type="submit"
          onClick={uploadImage}
        >
          Upload!
        </button>
      </div>
    </div>
  );
}
