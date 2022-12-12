import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Customize from './pages/customize'
import Login  from './pages/login'
import Profile  from './pages/profile'
import Signup from './pages/signup'
import Userlist  from './pages/userlist'
import NavHeader from './components/NavHeader'
import NavHeaderLogged from './components/NavHeaderLogged'
import Testing from './components/carousel/Carousel'
import { useEffect, useState } from "react"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { useParams } from "react-router-dom"


export default function App() {


  const [logStatus, setLogStatus] = useState(false);
  const token = sessionStorage.getItem("authToken");
  const param = useParams()

  useEffect(() => {
    if (token) {
      setLogStatus(true);
    }
  }, []);

  
    return (
      <BrowserRouter>
      {logStatus === true ? <NavHeaderLogged logStatus={logStatus} setLogStatus={setLogStatus}/> : <NavHeader/>}
        <Routes>
          <Route path="/" element={<Login logStatus={logStatus} setLogStatus={setLogStatus}/>}></Route>
          <Route path="/signup" element={<Signup  setLogStatus={setLogStatus}/>}></Route>
          <Route path= {`/profile/:${param.username}`} element={<Profile token={token}/>}></Route>
          <Route path="/profile/customize" element={<Customize token={token} />}></Route>
          <Route path="/userlist" element={<Userlist />}></Route>
          <Route path="/test" element={<Testing/>}></Route>
        </Routes>


      </BrowserRouter>
    )
  }