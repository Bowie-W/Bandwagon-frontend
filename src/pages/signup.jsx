import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Signup () {
    return (
      <div className="bg-pink-600 w-screen h-screen flex flex-col justify-start items-center">
        <Logo/>
        <form className="w-1/4 h-1/2 p-6 border-2 border-black flex flex-col mt-14">
          <label htmlFor="username">Username:</label>
          <input name="username"></input>
          <label htmlFor="password">Password:</label>
          <input name="password"></input>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input name="confirmPassword"></input>
          <label htmlFor="email">Email:</label>
          <input name="email"></input>
          <label htmlFor="City">City:</label>
          <input name="city"></input>
          <button type="submit" className="mt-3"> Join!</button>
        </form>
      </div>
    );
  }
  