import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavHeader() {
    const navigate = useNavigate()

    
  return (
    <div className="w-screen bg-black-50 h-14 flex justify-center items-center">
     <h1 className="text-white-50 text-3xl">BANDWAGON</h1>
    </div>
  );
}
