import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png";
import { useNavigate } from "react-router-dom";
import Prof from "../assests/images/user.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Icon from '../assests/images/icon.jpg'

export default function NavHeaderLogged({ logStatus, setLogStatus, token }) {
  const navigate = useNavigate();
  const [tokenInfo, setTokenInfo] = useState('')

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    setLogStatus(false);
    navigate(`/`);
  };

  useEffect(() =>{
    
  const decodedToken = jwtDecode(token)
  setTokenInfo(decodedToken)
    
  },[])

  console.log(tokenInfo)


  const param = useParams()
  return (
    <div className="w-full fixed h-14 bg-black-50 flex justify-end box-border text-white-50">
      <div className="w-18 flex items-center">
        <Link to={"/userlist"} className='mr-32 md:mr-16'>
          <p className="text-white-50 bg-purple-50 p-1 rounded-full ">Find some Players!</p>
        </Link>
      </div>
      <Link to={`/profile/${tokenInfo.id}`}>
        <img src={Icon} className="h-2/3 mt-3 mx-5 rounded-full" />
      </Link>
      <button type="click" onClick={handleLogout} className="mr-5 text-white-50">
        Signout
      </button>
    </div>
  );
}
