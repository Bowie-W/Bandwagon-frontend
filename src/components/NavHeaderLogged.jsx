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

export default function NavHeaderLogged({ logStatus, setLogStatus}) {
  const navigate = useNavigate();
  const [tokenInfo, setTokenInfo] = useState('')
  const [convoStatus, setConvoStatus] = useState(false)
  const [convos, setConvos] = useState([])
  const token = sessionStorage.getItem("authToken");
  const [userId, setUserId] = useState('')
  const [messengers, setMessengers] = useState([]);
  const [messenerProfile, setMessenerProfile] = useState([]);
  const param = useParams()

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    setLogStatus(false);
    navigate(`/`);
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token)
      setTokenInfo(decodedToken)
      setUserId(decodedToken.id)
    }
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5050/conversations/${userId}`)
    .then((response)=>{
      setConvos(response.data)
      console.log(response.data)
      console.log(response.data[0].sender_id)
      
    })
  
    }, [userId]

  )


  useEffect(() => {
    const arr = [];

    for (let i = 0; i < convos.length; i++) {
      if (convos[i].sender_id !== userId) {
        let friendID = convos[i].sender_id;
        arr.push({ id: friendID });
      } else {
        let friendID = convos[i].receiver_id;
        arr.push({ id: friendID });
      }
    }
    console.log(arr);
    setMessengers(arr);
    console.log(messengers);
  }, [convos]);

  useEffect(() => {
    const msgArray = [];

    for (let i = 0; i < messengers.length; i++) {
      axios
        .get(`http://localhost:5050/users/${messengers[i].id}`)
        .then((response) => {
          msgArray.push(response.data[0]);
        });
    }

    setMessenerProfile(msgArray);
  }, [messengers]);



  const renderConversations = () => {
    if (convoStatus === false) {
    setConvoStatus(true)} else {
      setConvoStatus(false)
    }
  }

  console.log(messenerProfile)


  return (
    <div className="w-full max-w-screen z-10 fixed h-14 bg-gray-100 flex justify-between md:justify-end items-center box-border text-white-50 relative">
      
        <Link to={"/userlist"} className='md:mr-16'>
          <p className="text-white-50 bg-purple-50 p-1 w-full ml-2 rounded-full md:text-start flex-shrink-0 text-center">Find Players!</p>
        </Link>
        <img className="rounded-full w-10 h-10" src={Chat} onClick={renderConversations}/>

      


      <Link to={`/profile/${userId}`}>
        <img src={Icon} className="h-2/3 mx-2 w-10 h-10 rounded-full" />
      </Link>
     
      <button type="click" onClick={handleLogout} className="mr-5 text-white-50">
        Signout
      </button>
      {convoStatus ? <ConversationList messenerProfile={messenerProfile} messengers={messengers} userId={userId} convos={convos}/> : null}
    </div>
  );
}
