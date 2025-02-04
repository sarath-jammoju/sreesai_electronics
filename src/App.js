import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import Navbar from './components/Navbar.js'
import Home from './Pages/Home.js'
import Computers from "./Pages/services/Computers.js"
import ContactUs from "./Pages/ContactUs.js"
import Footer from './components/Footer.js'
import Security from "./Pages/services/Security.js";
import Communication from "./Pages/services/Communication.js";
import Displays from "./Pages/services/Displays.js";
import Solutions from "./Pages/services/Solutions.js";
import ScrollToTop from "./components/ScrollToTop.js";



function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set the default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/services/security" element={<Security />} />
        <Route path="/services/communication" element={<Communication />} />
        <Route path="/services/displays" element={<Displays />} />
        <Route path="/services/solutions" element={<Solutions />} />
        <Route path="/services/computers" element={<Computers />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
    </>
    
  );
}

export default App;
