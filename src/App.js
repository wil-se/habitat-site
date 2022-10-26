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


function App() {
  return (
    <Router>
      <div style={{ height: 10, backgroundColor: 'black' }}></div>
      <div className='d-flex justify-content-center'>
        <img className='d-flex justify-content-center' style={{ width: window.innerWidth > 600 ? '50%' : '100%' }} alt="logo" src={Logo} />
      </div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/dao" element={<DAO/>} />
        <Route path="/habi" element={<HABI/>} />
        <Route path="/metavexpo" element={<Metavexpo/>} />
        <Route path="/roadmap" element={<Roadmap/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
