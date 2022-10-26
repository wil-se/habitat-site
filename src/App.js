import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Whitepaper from "./components/Whitepaper/Whitepaper";
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
      <div className='d-flex justify-content-center'>
        <img className='d-flex justify-content-center' style={{ width: window.innerWidth > 600 ? '50%' : '100%' }} alt="logo" src={Logo} />
      </div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
