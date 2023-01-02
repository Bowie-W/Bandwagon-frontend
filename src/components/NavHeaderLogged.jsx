import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import axios from "axios";
import Icon from '../assests/images/icon.jpg'
import Chat from '../assests/images/chatbox.webp'
import Message from "../components/Message";
import Chatbox from "../components/Chatbox";
import ConversationList from "../components/ConversationList";

export default function NavHeaderLogged({userID, logStatus, setLogStatus, token }) {
  const navigate = useNavigate();
  const [tokenInfo, setTokenInfo] = useState('')
  const [convoStatus, setConvoStatus] = useState(false)
  // const [userID, setUserId] = useState('')
  const [convos, setConvos] = useState([])
  const [user, setUser] = useState([])
  const param = useParams()

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    setLogStatus(false);
    navigate(`/`);
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/conversations/${userID}`)
    .then((response)=>{
      setConvos(response.data)
      console.log(response.data)
      console.log(response.data[0].sender_id)
      console.log(userID)
      
    })
  
    }, []

  )

  useEffect(()=>{
  

  },[convos])
  
  // console.log(convos.data)
  // console.log(userID)

  const renderConversations = () => {
    if (convoStatus === false) {
    setConvoStatus(true)} else {
      setConvoStatus(false)
    }
  }
  console.log(userID)

  return (
    <div className="w-full max-w-screen z-10 fixed h-14 bg-gray-100 flex justify-end box-border text-white-50">
      
        <Link to={"/userlist"} className='mr-5  md:mr-16'>
          <p className="text-white-50 bg-purple-50 p-1 mt-3 w-full rounded-full flex-shrink-0">Find some Players!</p>
        </Link>
        <img src={Chat} onClick={renderConversations}/>

      


      <Link to={`/profile/${userID}`}>
        <img src={Icon} className="h-2/3 mt-3 mx-5 rounded-full" />
      </Link>
     
      <button type="click" onClick={handleLogout} className="mr-5 text-white-50">
        Signout
      </button>
      {convoStatus ? <ConversationList user={user} setUser={setUser} userID={userID} convos={convos}/> : null}
    </div>
  );
}
