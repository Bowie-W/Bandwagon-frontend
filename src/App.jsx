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
import axios from "axios"
// var passport = require('passport')
// var GoogleStrategy = require ('passport-google-oauth20')




export default function App() {


  const [logStatus, setLogStatus] = useState(false);
  const token = sessionStorage.getItem("authToken");
  const [tokenInfo, setTokenInfo] = useState('')
  const [userID, setUserId] = useState('')
  const [firstContactStatus, setFirstContactStatus] = useState(false)

  const [newConvoId, setNewConvoId] = useState('')
  const {id} = useParams()

  useEffect(() => {
    if (token) {
      setLogStatus(true);
      const decodedToken = jwtDecode(token)
      setTokenInfo(decodedToken)
      setUserId(decodedToken.id)
    }
  }, []);

  console.log(firstContactStatus)


  // useEffect(() =>{
    
  //   if(token)
  //   const decodedToken = jwtDecode(token)
  //   setTokenInfo(decodedToken)
  //   setUserId(decodedToken.id)
      
  //   },[])
  
    return (
      <BrowserRouter>
      {logStatus === true ? <NavHeaderLogged newConvoId={newConvoId} userID={userID}logStatus={logStatus} setLogStatus={setLogStatus} id={id} token={token} firstContactStatus={firstContactStatus} setFirstContactStatus={setFirstContactStatus}/> : <NavHeader/>}
        <Routes>
          <Route path="/" element={<Login logStatus={logStatus} setLogStatus={setLogStatus} userID={userID}/>}></Route>
          <Route path="/signup" element={<Signup  setLogStatus={setLogStatus}/>}></Route>
          <Route path= {`/profile/:${id}`} element={<Profile newConvoId={newConvoId} setNewConvoId={setNewConvoId} token={token} firstContactStatus={firstContactStatus} setFirstContactStatus={setFirstContactStatus}/>}></Route>
          <Route path={`/profile/customize/:${id}`} element={<Customize token={token} />}></Route>
          <Route path="/userlist" element={<Userlist token={token}/>}></Route>
          <Route path="/test" element={<Testing/>}></Route>
          <Route path="/chatTest" element={<ChatTest/>}></Route>
        </Routes>


      </BrowserRouter>
    )
  }