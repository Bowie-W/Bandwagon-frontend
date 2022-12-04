import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Customize from './pages/customize'
import Login  from './pages/login'
import Profile  from './pages/profile'
import Signup from './pages/signup'
import Userlist  from './pages/userlist'
import Homepage from './pages/homepage'
import NavHeader from './components/NavHeader'


export default function App() {



  
    return (
      <BrowserRouter>
      <NavHeader />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>


      </BrowserRouter>
    )
  }