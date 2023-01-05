import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Userlist({ token }) {
  const Serv_URL = "http://localhost:5050";
  const [userlist, setUserlist] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(`${Serv_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const resUserlist = response.data;

        for (let i = 0; i < resUserlist.length; i++) {
          const userlistGenreArray = resUserlist[i].genreChips.split(",");
          resUserlist[i].userlistGenre = userlistGenreArray;
          const userlistInstrArray = resUserlist[i].instrChips.split(",");
          resUserlist[i].userlistInstr = userlistInstrArray;
          setUserlist(resUserlist);
        }
      });
  }, []);

  console.log(userlist);

  const goToUser = (event) => {
    const user_ID = event.currentTarget.attributes.value.value;
    axios.get(`${Serv_URL}/users/${user_ID}`).then((response) => {
      setUserInfo(response.data);
    });
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="flex justify-center">
        {" "}
        <h1 className="userlist-Title text-white-50 text-center text-6xl mb-8">
          Artists in Vancouver
        </h1>
      </div>

      <div className="flex justify-center">
        {" "}
        <input className="w-2/3 lg:w-1/3 bg-white-50 rounded-xl pl-2"
                type='text'
                placeholder="Search for Tags..."
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase())
                }}/>
      </div>

      <div className=" overflow-y-scroll overflow-hidden scrollbar-thin h-4/5">
        <div className="flex flex-col bg-gray-100 h-screen items-center md:h-full">
          <ul className="userlist flex flex-wrap overflow-y-scroll scrollbar-thin h-screen w-5/6 mt-5 md:mt-0 text-white-50 py-10 px-5 md:px-5 bg-black-50 h-4/5 rounded-2xl md:mt-10 md:w-4/5">
            {userlist
            .filter((userlist_info) =>{
              return(
                userlist_info.genreChips.toLowerCase().includes(search) ||
                userlist_info.instrChips.toLowerCase().includes(search)
              )
            })
            .map((userlist_info) => (
              <li
                className="flex flex-col mb-5 w-full  md:h-3/5 md:w-1/2"
                onClick={goToUser}
                value={userlist_info.id}
                key={userlist_info.id}
              >
                <div className="flex">
                  {" "}
                  <Link
                    to={`/profile/${userlist_info.id}`}
                    className="flex justify-center items-center h-24 md:h-32 lg:h-5/6 w-2/5 bg-purple-50 rounded-xl"
                  >
                    <img
                      className="avatar w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-cover rounded-full border-white border"
                      src={userlist_info.profile_pic}
                      alt="profile pic"
                    />
                  </Link>
                  <div className="user-info-container w-1/2 flex flex-col justify-start ml-5">
                    <h2 className="text-white-50 hidden lg:flex text-2xl h-1/4  border-b border-t border-purple-50 md:mb-2">
                      {userlist_info.profile_name}
                    </h2>
                    <div className="flex flex-wrap">
                      {userlist_info.userlistGenre.map((chip) => (
                        <div className="text-center rounded-2xl text-white-50 px-3 py-1 bg-gray-50 my-1 mx-1">
                          {chip}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap">
                      {userlist_info.userlistInstr.map((chip) => (
                        <div className="text-center rounded-2xl text-white-50 px-3 py-1 bg-purple-50 my-1 mx-1">
                          {chip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h1 className="  text-2xl text-center lg:hidden mt-2 md:mx-5 border-b border-t border-purple-50 md:mt-5 md:h-3/4 md:w-fullborder lg:w-11/12 break-normal">
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
