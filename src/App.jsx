import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Customize from './pages/customize'
import Login  from './pages/login'
import Profile  from './pages/profile'
import Signup from './pages/signup'
import Userlist  from './pages/userlist'
import NavHeader from './components/NavHeader'
import NavHeaderLogged from './components/NavHeaderLogged'
import ChatTest from "./pages/chattest"
import Testing from './components/carousel/Carousel'
import { useEffect, useState } from "react"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { useParams } from "react-router-dom"
import jwtDecode from "jwt-decode"




export default function App() {


  const [logStatus, setLogStatus] = useState(false);
  const token = sessionStorage.getItem("authToken");
  const [tokenInfo, setTokenInfo] = useState('')
  const [userID, setUserId] = useState('')
  const {id} = useParams()

  useEffect(() => {
    if (token) {
      setLogStatus(true);
      const decodedToken = jwtDecode(token)
      setTokenInfo(decodedToken)
      setUserId(decodedToken.id)
    }
  }, []);

  // useEffect(() =>{
    
  //   if(token)
  //   const decodedToken = jwtDecode(token)
  //   setTokenInfo(decodedToken)
  //   setUserId(decodedToken.id)
      
  //   },[])

    console.log(userID)


  
    return (
      <BrowserRouter>
      {logStatus === true ? <NavHeaderLogged userID={userID}logStatus={logStatus} setLogStatus={setLogStatus} id={id} token={token}/> : <NavHeader/>}
        <Routes>
          <Route path="/" element={<Login logStatus={logStatus} setLogStatus={setLogStatus} userID={userID}/>}></Route>
          <Route path="/signup" element={<Signup  setLogStatus={setLogStatus}/>}></Route>
          <Route path= {`/profile/:${id}`} element={<Profile token={token}/>}></Route>
          <Route path={`/profile/customize/:${id}`} element={<Customize token={token} />}></Route>
          <Route path="/userlist" element={<Userlist token={token}/>}></Route>
          <Route path="/test" element={<Testing/>}></Route>
          <Route path="/chatTest" element={<ChatTest/>}></Route>
        </Routes>


      </BrowserRouter>
    )
  }