import axios from "axios";
import { useEffect, useState } from "react";

export default function Gear({ gear }) {
  const Serv_URL = "http://localhost:5050";
  // const [gear, setGear] = useState([]);
  const token = sessionStorage.getItem("authToken");

  // useEffect(() => {
  //   axios
  //     .get(`${Serv_URL}/profile/gear`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setGear(response.data.userGear);
  //       console.log(response.data.userGear);
  //     });
  // }, []);
  // console.log(gear[0])

  return (
    <div className="bg-gray-50 w-full h-full flex  rounded-b-xl ">
      {gear.map((gear_info) => (
        <div key={gear_info.id}>
          <img
            className=" w-32 h-32  md:w-72 md:h-72 mt-5 mx-5 "
            src={gear_info.gear_pic}
          />
          <div className="w-1/2 mt-5 md:ml-10 ">
            <h1 className="name mb-5 text-xl"> Instrument Name</h1>
            <p className="description">{gear_info.gear_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
