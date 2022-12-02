import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Customize from './pages/customize'
import Login  from './pages/login'
import Profile  from './pages/profile'
import Signup from './pages/signup'
import Userlist  from './pages/userlist'


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>


      </BrowserRouter>
    )
  }