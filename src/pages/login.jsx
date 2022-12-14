import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login({logStatus, setLogStatus}) {
  const navigate = useNavigate();
  const Serv_URL = "http://localhost:5050";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setLogStatus(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${Serv_URL}/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.token);
          sessionStorage.authToken = response.data.token;
          setLogStatus(true);
          // setUser(response.data);
          // console.log(response.data)
        }
      })
      .catch(() => {
        console.log("Error in Logging in");
        setLogStatus(false);
      });
  };


  useEffect(()=>{

    if (logStatus === true) {
      navigate(`/profile/${username}`);
    }
  },[logStatus]);

  return (
    <div className="bg-gradient-to-r from-black-50 to-purple-50 text-white-50 w-screen h-screen flex flex-col justify-start items-center">
      <form
        onSubmit={handleLogin}
        className="w-1/4 h-3/4 p-6 border-2 border-black flex flex-col mt-6"
      >
        <div className="border-b-2 pb-4">
          <h2 className="text-center text-3xl">Hop On!</h2>
          <label htmlFor="username">Username:</label>
          <input
            className="mb-1 w-full"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className="w-full"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log On!</button>
          <Link to={"/signup"}>
            <p className="mt-5"> New? Sign up here!</p>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mt-4">Or</h2>
          <button className="bg-white-50 text-black-50 mt-2 w-full p-2 rounded-full">
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
