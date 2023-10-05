import {
  FaFacebook,
  FaInstagram,
  FaSquareTwitter,
  FaSquareYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <p className="slogan">
        <span>CARVAN</span> | Best Place to Buy Preowned Car{" "}
      </p>
      <p className="intro">
        Copyright © 2023 CARVAN Company – Welcome to CARVAN, your trusted
        destination for high-quality preowned cars. With a passion for
        automotive excellence, we offer a curated selection of vehicles to meet
        your driving needs.
      </p>

      <div className="social">
        <FaFacebook />
        <FaInstagram />
        <FaSquareTwitter />
        <FaSquareYoutube />
        <FaLinkedinIn />
      </div>
    </footer>
  );
}

export default Footer;
