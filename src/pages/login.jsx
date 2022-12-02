import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-pink-600 w-screen h-screen flex flex-col justify-start items-center">
      <Logo />
      <form className="w-1/4 h-1/3 p-6 border-2 border-black flex flex-col mt-28">
        <label htmlFor="username">Username:</label>
        <input className="mb-1" name="username"></input>
        <label htmlFor="password">Password:</label>
        <input name="password"></input>
        <Link to={"/signup"}>
          <p className="mt-5"> New? Sign up here!</p>
        </Link>
      </form>
    </div>
  );
}
