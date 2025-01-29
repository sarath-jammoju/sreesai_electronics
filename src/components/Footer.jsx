import instaImg1 from "../../src/assets/instagram-1.jpg";
import instaImg2 from "../../src/assets/instagram-2.jpg";
import instaImg3 from "../../src/assets/instagram-3.jpg";
import instaImg4 from "../../src/assets/instagram-4.jpg";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        
        <div className="footer-column">
          <h4>Contact Info</h4>
          
          <p>
          2/7, Brodipet, Near Sivalayam, Guntur - 522002
          </p>
          <p>            
            info@sreesaielectronics.in
          </p>
          <p>            
            +91 8008884167
            <br />
            +91 7569299875
          </p>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">News</a>
          <a href="#">Gallery</a>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <a href="#">Help</a>
          <a href="#">Carrier</a>
          <a href="#">Customer Storys</a>
          <a href="#">Support Home</a>
        </div>
        <div className="footer-column">
          <h4>Our Services</h4>
          <a href="#">Security</a>
          <a href="#">Communication</a>
          <a href="#">Displays</a>
          <a href="#">Solution</a>
          <a href="#">Computers</a>
        </div>
        <div className="footer-bar">
          <p className="footer-text">© 2025 Sree Sai Electronics All rights reserved</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
