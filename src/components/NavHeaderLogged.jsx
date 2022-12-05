import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png";
import { useNavigate } from "react-router-dom";
import Prof from "../assests/images/user.png";

export default function NavHeaderLogged({ logStatus, setLogStatus }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    setLogStatus(false);
    navigate(`/`);
  };

  return (
    <div className="w-screen h-14 flex justify-end box-border">
      <div className="w-18 flex items-center">
        <Link to={"/"}>
          <p >Find some Players!</p>
        </Link>
      </div>
      <Link to={"/profile"}>
        <img src={Prof} className="h-1/2 mt-3 mx-5" />
      </Link>
      <button type="click" onClick={handleLogout} className="mr-5">
        Signout
      </button>
    </div>
  );
}
