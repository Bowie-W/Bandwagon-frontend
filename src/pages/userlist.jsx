import ProfilePic from "../assests/images/user.png";

export default function Userlist() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <h1 className="userlist-Title text-white-50 text-4xl w-1/2 md:pt-10 md:ml-20">
        {" "}
        Thems in Vancouver
      </h1>
      <ul className="userlist flex flex-wrap overflow-scroll text-white-50 py-10 px-10 bg-black-50 h-2/3 rounded-2xl md:ml-20 md:mt-10 md:w-3/4">
        <li className="h-2/5 w-1/2 flex">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        <li className="h-2/5 w-1/2 flex mb-5">
          <div className="flex justify-center items-center h-full w-2/5 bg-red-500 rounded-xl">
            <img
              className="avatar w-20 h-20 object-cover rounded-full border-white border"
              src={ProfilePic}
              alt="profile pic"
            />
          </div>
          <div className="user-info-container w-1/2 flex flex-col ml-5">
            <h2 className="text-white-50 h-1/4">User_Name</h2>
            <p className="h-3/4 break-normal">Chips Chips Chips chips chips</p>
          </div>
          <div></div>
        </li>
        
        {/* Some Mapping Function that takes the DB info and fills out <li's> */}
      </ul>
    </div>
  );
}
