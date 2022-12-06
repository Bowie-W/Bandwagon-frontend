import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function CustomTracks() {
  const [trackname, setTrackName] = useState("Pink and White");
  const [trackDescript, setTrackDescript] = useState("Pink and white Pink and white Pink and white Pink and white Pink and white Pink and white Pink and white Pink and white Pink and white Pink and white ")
  return (
    <div className=" flex flex-col bg-red-500 w-full h-3/4 ">
      {/* Map out all tracks */}

      <form
        method="POST"
        action="http://localhost:5050/profile/customize"
        encType="multipart/form-data"
        className="h-full flex"
      >
        <div className="flex flex-col w-1/2">
          <textarea
            onChange={(e) => setTrackName(e.target.value)}
            value={trackname}
            className="text-5xl px-5 py-5 w-2/3 resize-none mt-5 ml-5 rounded"
          ></textarea>
          <div className="w-1/2 flex flex-col mt-5 ml-5">
            <input type="file" name="audio"></input>
            <button className="h-10 w-36 rounded-3xl bg-blue-500 mt-5" type="submit">
              Upload your Track!
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full bg-yellow-500 flex justify-center items-center">
            <textarea 
            onChange={(e) => setTrackDescript(e.target.value)}
            value={trackDescript}
            className="h-3/4 w-3/4"
            ></textarea>
        </div>
      </form>
    </div>
  );
}
