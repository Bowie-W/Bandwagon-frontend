import Guitar from "../assests/images/guitar.jpg";

export default function CustomGear() {
  return (
    <div className="bg-green-500 w-full h-3/4 flex">
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
          fingers of the opposite hand. A plectrum or individual finger picks
          may also be used to strike the strings. The sound of the guitar is
          projected either acoustically, by means of a resonant chamber on the
          instrument, or amplified by an electronic pickup and an amplifier.
        </p>
      </div>
    </div>
  );
}
