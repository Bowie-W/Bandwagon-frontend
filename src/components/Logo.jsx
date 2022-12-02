import { Link } from "react-router-dom";

export default function Logo (){

    return(
        <Link to={"/"}>
        <img src="../assests/images/logo.png" alt="BWG" className="my-10"/>
        </Link>
    )

}