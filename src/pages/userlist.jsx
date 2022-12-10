import ProfilePic from "../assests/images/user.png";

export default function Userlist() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <h1 className="userlist-Title text-white-50 text-center text-4xl pt-5 md:w-1/2 md:pt-10 md:ml-24 lg:ml-36 md:text-left">
        Thems in Vancouver
      </h1>
      <div className=" overflow-y-scroll md:overflow-hidden h-4/5">
        <div className="flex flex-col justify-center items-center md:h-full">
          <ul className="userlist flex flex-wrap overflow-y-scroll scrollbar-thin h-screen w-5/6 mt-5 md:mt-0 text-white-50 py-10 px-5 md:px-10 bg-black-50 h-4/5 rounded-2xl md:mt-10 md:w-4/5">
            <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className=" mt-2 md:mt-5 md:h-3/4 md:w-full lg:w-2/3 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>  <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className="mt-5 md:h-3/4 md:w-1/2 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>
            <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className="mt-5 md:h-3/4 md:w-1/2 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>
            <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className="mt-5 md:h-3/4 md:w-1/2 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>
            <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className="mt-5 md:h-3/4 md:w-1/2 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>
            <li className="flex mb-5 w-full h-1/2 md:h-3/5 md:w-1/2 ">
              <div className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl">
                <img
                  className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                  src={ProfilePic}
                  alt="profile pic"
                />
              </div>
              <div className="user-info-container w-1/2 flex flex-col ml-5">
                <h2 className="text-white-50 text-2xl h-1/4">User_Name</h2>
                <p className="mt-5 md:h-3/4 md:w-1/2 break-normal">
                  Chips Chips Chips chips chips
                </p>
              </div>
              <div></div>
            </li>

            
            {/* Some Mapping Function that takes the DB info and fills out <li's> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
