import Guitar from "../assests/images/guitar.jpg";
import { useState } from "react";
import GearModal from './GearModal'

export default function CustomGear() {

    const [gearModalStatus, setGearModalStatus] = useState(false);

    function handleGearModal() {
      if (gearModalStatus === false) {
        setGearModalStatus(true);
      } else {
        setGearModalStatus(false);
      }
    }
  return (
    <div className="bg-green-500 w-full h-3/4 flex">
         {gearModalStatus && <GearModal handleGearModal={handleGearModal} />}
      <div
        className="w-72 h-72 mt-5 mx-5 "
        style={{
          backgroundImage: `url(${Guitar})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-1/2 mt-5 ml-10 ">
        <h1 className="name mb-5 text-xl"> Instrument Name</h1>
        <p className="description">
          The guitar is a fretted musical instrument that typically has six
          strings. It is usually held flat against the player's body and played
          by strumming or plucking the strings with the dominant hand, while
          simultaneously pressing selected strings against frets with the
          fingers of the opposite hand. 
        </p>
        <button
              type="button"
              onClick={handleGearModal}
              className="h-10 w-36 rounded-3xl bg-blue-500 mt-5"
            >
              Show off your Gear!
            </button>
      </div>
    </div>
  );
}
