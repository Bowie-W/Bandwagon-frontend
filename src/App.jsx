import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Customize from './pages/customize'
import Login  from './pages/login'
import Profile  from './pages/profile'
import Signup from './pages/signup'
import Userlist  from './pages/userlist'
import NavHeader from './components/NavHeader'
import NavHeaderLogged from './components/NavHeaderLogged'
import { useEffect, useState } from "react"


export default function App() {


  const [logStatus, setLogStatus] = useState(false);
  const token = sessionStorage.getItem("authToken");

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
          <Route path="/profile" element={<Profile token={token}/>}></Route>
          <Route path="/profile/customize" element={<Customize token={token} />}></Route>
          <Route path="/userlist" element={<Userlist />}></Route>
        </Routes>


      </BrowserRouter>
    )
  }