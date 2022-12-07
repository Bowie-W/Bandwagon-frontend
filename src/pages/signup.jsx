import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const { v4: uuid } = require("uuid");
const URL = "http://localhost:5050";

export default function Signup() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  
  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/signup`, {
        id: uuid(),
        username: username,
        email: email,
        password: password,
        city: city
      })
      .then((response) => {
        if (response) {
          // navigate(`/profile/customize`);
        }
      });
  };

  return (
    <div className="bg-pink-600 w-screen h-screen flex flex-col justify-start items-center">
      <div className="w-28">
        <Logo />
      </div>
      <form
        onSubmit={handleSignup}
        className="w-1/4 h-1/2 p-6 border-2 border-black flex flex-col mt-14"
      >
        <label htmlFor="username">Username:</label>
        <input name="username" onChange={(e) => setUsername(e.target.value)}></input>
        <label htmlFor="password">Password:</label>
        <input name="password" onChange={(e) => setPassword(e.target.value)}></input>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input name="confirmPassword"></input>
        <label htmlFor="email">Email:</label>
        <input name="email" onChange={(e) => setEmail(e.target.value)} ></input>
        <label htmlFor="City">City:</label>
        <input name="city" onChange={(e) => setCity(e.target.value)}></input>
        <button type="submit" className="mt-3">
          {" "}
          Join!
        </button>
      </form>
    </div>
  );
}
