import React from "react";
import "../styles/Home.css";

const Footer = () => {
  const googleMapsURL = "https://www.google.com/maps/place/16%C2%B018'04.2%22N+80%C2%B026'10.9%22E/@16.301169,80.436347,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.301169!4d80.436347?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"; // Use shareable map link

function handleGoogleMap() {
  window.open(googleMapsURL, "_blank");
}

return (
  <div className="map-footer-container">
    <footer className="footer-container">
      <div className="google-map-container" onClick={handleGoogleMap} style={{ cursor: "pointer" }}>
        <iframe
          className="google-map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3829.425889734358!2d80.436347!3d16.301168999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzA0LjIiTiA4MMKwMjYnMTAuOSJF!5e0!3m2!1sen!2sin!4v1738417324204!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ pointerEvents: "none", width: "100%", height: "300px" }}
        ></iframe>
      </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">News</a>
          <a href="#">Gallery</a>
          <a href='#'>Blog</a>
        </div>
        <div className="footer-column">
          <h4>UsefulLinks</h4>
          <a href="#">Help</a>
          <a href="#">Carrier</a>
          <a href="#">Customer Storys</a>
          <a href="#">Support Home</a>
          <a href="#">Product</a>
        </div>
        <div className="footer-column">
          <h4>OurServices</h4>
          <a href="#">Security</a>
          <a href="#">Communication</a>
          <a href="#">Displays</a>
          <a href="#">Solution</a>
          <a href="#">Computers</a>
        </div>
        <div className="footer-bar">
          <p className="footer-text">
            © 2025 Sree Sai Electronics | All rights reserved || Developed by
            Sanjit Tech Solutions Pvt Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
