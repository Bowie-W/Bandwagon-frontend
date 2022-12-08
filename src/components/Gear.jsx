import Guitar from "../assests/images/guitar.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gear() {

    const Serv_URL = "http://localhost:5050";
    const [gear, setGear] = useState([]);
    const token = sessionStorage.getItem("authToken");

    useEffect(() => {
        axios
          .get(`${Serv_URL}/profile/gear`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setGear(response.data.userGear);
            console.log(response.data.userGear)
          });
      }, []);
    
      console.log(gear)
  return (
    <div className="bg-green-500 w-full h-3/4 flex">
      <div
        className=" w-32 h-32  md:w-72 md:h-72 mt-5 mx-5 "
        style={{
          backgroundImage: `url(${Guitar})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-1/2 mt-5 md:ml-10 ">
        <button>+ Add Gear</button>
        <h1 className="name mb-5 text-xl"> Instrument Name</h1>
        <p className="description">
          The guitar is a fretted musical instrument that typically has six
          strings. 
        </p>
      </div>
    </div>
  );
}
