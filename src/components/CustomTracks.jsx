import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import TrackModal from "./TrackModal";

export default function CustomTracks() {
  const [trackname, setTrackName] = useState("Pink and White");
  const [trackDescript, setTrackDescript] = useState("");

  const [trackModalStatus, setTrackModalStatus] = useState(false);

  function handleTrackModal() {
    if (trackModalStatus === false) {
      setTrackModalStatus(true);
    } else {
      setTrackModalStatus(false);
    }
  }

  return (
    <div className=" flex flex-col bg-red-500 w-full h-3/4 ">
      {trackModalStatus && <TrackModal handleTrackModal={handleTrackModal} />}
      {/* Map out all tracks */}

      <form className="flex">
        <div className="flex flex-col w-1/2">
          <textarea
            onChange={(e) => setTrackName(e.target.value)}
            value={trackname}
            className="text-5xl px-5 py-5 w-2/3 resize-none mt-5 ml-5 rounded"
          ></textarea>
          <div className="w-1/2 flex flex-col mt-5 ml-5">
            <input type="file" name="audio"></input>
            <button
              type="button"
              onClick={handleTrackModal}
              className="h-10 w-36 rounded-3xl bg-blue-500 mt-5"
            >
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
