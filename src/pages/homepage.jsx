import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {


  return (
    <div className="bg-gradient-to-r from-red-500 to-black-500 w-screen h-screen flex flex-col justify-start items-center">
      <div className="w-10">
        <Logo />
      </div>

    </div>
  );
}
