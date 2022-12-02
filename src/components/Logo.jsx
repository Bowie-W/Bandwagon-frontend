import { Link } from "react-router-dom";
import LogoPic from "../assests/images/logo.png"

export default function Logo (){

    return(
        <Link to={"/"}>
        <img src={LogoPic} alt="BWG" className="my-10"/>
        </Link>
    )

}