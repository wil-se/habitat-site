import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Docs from "./components/Docs/Docs";
import DAO from "./components/DAO/DAO";
import HABI from "./components/HABI/HABI";
import Metavexpo from "./components/Metavexpo/Metavexpo";
import Roadmap from "./components/Roadmap/Roadmap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Assets/logo-purple.png"
import LogoWhite from "./Assets/logo-purple-white.png"

import { useState } from "react";


function App() {
  console.log(localStorage.getItem("dark") === 'true');
  const [dark, setDark] = useState(localStorage.getItem("dark") === 'true');
  console.log(dark);
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <Router>
        <div style={{ height: 10, backgroundColor: 'black' }}></div>
        <div className='d-flex justify-content-center'>
          <img className='d-flex justify-content-center' style={{ width: window.innerWidth > 600 ? '50%' : '100%' }} alt="logo" src={dark?LogoWhite:Logo} />
        </div>
        <Navbar dark={dark} setDark={setDark} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/docs" element={<Docs dark={dark} />} />
          <Route path="*" element={<Navigate dark={dark} to="/" />} />
          <Route path="/dao" element={<DAO dark={dark} />} />
          <Route path="/habi" element={<HABI dark={dark} />} />
          <Route path="/metavexpo" element={<Metavexpo dark={dark} />} />
          <Route path="/roadmap" element={<Roadmap dark={dark} />} />
        </Routes>
        <Footer dark={dark}/>
      </Router>
    </div >
  );
}

export default App;
