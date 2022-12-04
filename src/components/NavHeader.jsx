import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png";

export default function Logo() {
  return (
    <div className="w-screen h-14 flex justify-between">
      <div className="w-10">
        <Link to={"/"}>
          <img src={LogoPic} alt="BWG" className=" " />
        </Link>
      </div>
      <Link to={"/login"}>
        <button type="click">Login</button>
      </Link>
      <button type="click">Signout</button>
    </div>
  );
}
