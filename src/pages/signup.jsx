import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import jwtDecode from "jwt-decode";

const { v4: uuid } = require("uuid");
const URL = "http://localhost:5050";

export default function Signup({setLogStatus}) {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [passWrong, setPassWrong] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword){
    axios
      .post(`${URL}/signup`, {
        id: uuid(),
        username: username,
        email: email,
        password: password,
        city: city,
        profile_name: username
      })
      .then((response) => {
        if (response) {
          console.log(response)
          sessionStorage.authToken = response.data.token;
          const token = response.data.token
          setLogStatus(true);
          const decodedToken = jwtDecode(token)
          navigate(`/profile/customize/${decodedToken.id}`);
        }
      })} else {
        setPassWrong(true)
      }
  };

  console.log(username)
  return (
    <div className="bg-gradient-to-r from-black-50 to-purple-50 w-screen h-screen flex flex-col justify-start items-center">
      <form
        onSubmit={handleSignup}
        className="px-10 w-5/6 md:w-1/2 md:h-4/6 justify-between lg:w-1/4 lg:h-1/2 p-6 border-2 border-black flex flex-col mt-14"
      >
        <label htmlFor="username" className="text-white-50">Username:</label>
        <input name="username" onChange={(e) => setUsername(e.target.value)} className='pl-2 rounded-xl'></input>
        <label htmlFor="password"  className="text-white-50">Password:</label>
        <input name="password" onChange={(e) => setPassword(e.target.value)} className='pl-2 rounded-xl'></input>
        <label htmlFor="confirmPassword"  className="text-white-50">Confirm Password:</label>
        <input name="confirmPassword"  onChange={(e) => setConfirmPassword(e.target.value)} className='pl-2 rounded-xl'></input>
        {passWrong && <span className="text-red-500">Passwords Don't Match</span>}
        <label htmlFor="email"  className="text-white-50">Email:</label>
        <input name="email" className='pl-2 rounded-xl' onChange={(e) => setEmail(e.target.value) } ></input>
        <label htmlFor="City"  className="text-white-50">City:</label>
        <input name="city" className='pl-2 rounded-xl' onChange={(e) => setCity(e.target.value)}></input>
        <div className="flex justify-center">
        <button type="submit" className="mt-3 text-white-50 bg-purple-50 p-1 w-24 mt-3 rounded-full">
          {" "}
          Join!
        </button></div>
      </form>
    </div>
  );
}
