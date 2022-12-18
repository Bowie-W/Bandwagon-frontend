import axios from "axios";
import { useState, useEffect } from "react";
import { Link} from "react-router-dom";

export default function Userlist({ token }) {
  const Serv_URL = "http://localhost:5050";
  const [userlist, setUserlist] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${Serv_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserlist(response.data);
      });
  }, []);

  const goToUser = (event) => {
    const user_ID = event.currentTarget.attributes.value.value;
    axios.get(`${Serv_URL}/users/${user_ID}`).then((response) => {
      setUserInfo(response.data);
    });
  };

  return (
    <div className="w-full h-screen pt-20 bg-gray-100">
      <h1 className="userlist-Title text-white-50 text-center text-4xl pt-5 md:w-1/2 md:pt-10 md:ml-24 lg:ml-36 md:text-left">
        Artists in Vancouver
      </h1>
      <div className=" overflow-y-scroll md:overflow-hidden h-4/5">
        <div className="flex flex-col justify-center h-screen items-center md:h-full">
          <ul className="userlist flex flex-wrap overflow-y-scroll scrollbar-thin h-screen w-5/6 mt-5 md:mt-0 text-white-50 py-10 px-5 md:px-5 bg-black-50 h-4/5 rounded-2xl md:mt-10 md:w-4/5">
            {userlist.map((userlist_info) => (
              <li
                className="flex flex-col mb-5 w-full h-1/2 md:h-3/5 md:w-1/2"
                onClick={goToUser}
                value={userlist_info.id}
              >
                <div className="flex">
                  {" "}
                  <Link
                    to={`/profile/${userlist_info.id}`}
                    className="flex justify-center items-center h-24 md:h-4/5 w-2/5 bg-purple-50 rounded-xl"
                  >
                    <img
                      className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                      src={userlist_info.profile_pic}
                      alt="profile pic"
                    />
                  </Link>
                  <div className="user-info-container w-1/2 flex flex-col justify-start ml-5">
                    <h2 className="text-white-50 md:hidden h-1/4 ">
                      {userlist_info.profile_chips}
                    </h2>
                    <h2 className="text-white-50 hidden md:flex text-2xl h-1/4  border-b border-t border-purple-50 ">
                      {userlist_info.profile_name}
                    </h2>
                    <p className=" hidden mt-2 md:flex md:mt-5 md:h-3/4 md:w-full lg:w-11/12 break-normal">
                      {userlist_info.profile_chips}
                    </p>
                  </div>
                  
                </div>
                <h1 className="  text-2xl text-center mt-2 md:hidden border-b border-t border-purple-50 md:mt-5 md:h-3/4 md:w-fullborder lg:w-11/12 break-normal">
                      {userlist_info.profile_name}
                    </h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
