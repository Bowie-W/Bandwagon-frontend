import ReactAudioPlayer from "react-audio-player";

export default function Tracks() {
  return (
    <div className=" flex flex-col bg-red-500 w-full h-3/4 ">
      {/* Map out all tracks */}
      <div className=" h-full flex flex-col justify-center">
        <h2 className="text-5xl px-5 py-5 w-1/2">Track Name</h2>
        <ReactAudioPlayer autoPlay controls className="h-10 ml-5" />
      </div>
    </div>
  );
}
