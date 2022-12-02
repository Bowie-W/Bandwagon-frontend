import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-gradient-to-r from-red-500 to-black-500 w-screen h-screen flex flex-col justify-start items-center">
      <div className="w-28">
        <Logo />
      </div>
      <form className="w-1/4 h-3/4 p-6 border-2 border-black flex flex-col mt-6">
        <div className="border-b-2 pb-4">
          <h2 className="text-center text-3xl">Hop On!</h2>
          <label htmlFor="username">Username:</label>
          <input className="mb-1 w-full" name="username"></input>
          <label htmlFor="password">Password:</label>
          <input className="w-full" name="password"></input>
          <Link to={"/signup"}>
            <p className="mt-5"> New? Sign up here!</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mt-4">Or</h2>
          <button className="bg-white mt-2 w-full p-2 rounded-full">Sign in with Google</button>

        </div>

      </form>
    </div>
  );
}
