import Tracks from "../components/Tracks";
import Equipment from "../components/Equipment";
import BackPic from "../assests/images/frank-cover.webp";
import ProfilePic from "../assests/images/frank-ava.jpg";

export default function Profile() {
  return (
    <div className="">
      <div className="flex ml-1">
        <div className="leftbar w-1/4 h-screen bg-red-500 items-center">
          <div className="flex justify-center">
            <img
              className="w-28 h-28 rounded-full my-5"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="flex">
            <div className="w-2/5 text-center ">Frank Ocean</div>
            <div className="w-3/5 mb-5">
              Dog-Lover, Lover of Dogs, and a dude who loves Dogs
            </div>
          </div>
          <div className="pl-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>

      <div className="bg-blue-500 w-screen h-1/3 absolute bottom-1">
        <Tracks />
        <Equipment />
      </div>
    </div>
  );
}
