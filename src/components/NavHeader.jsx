import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavHeader() {
    const navigate = useNavigate()

    
  return (
    <div className="w-screen h-14 flex justify-center">
      <div className="w-10 h-full">
        <Link to={"/"}>
          <img src={LogoPic} alt="BWG" className=" " />
        </Link>
      </div>
    </div>
  );
}
