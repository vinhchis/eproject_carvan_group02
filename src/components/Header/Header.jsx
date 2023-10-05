import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/image/logo/logofin.png";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-item">
      <Link className="nav-link" to="/">
        <img src={Logo} alt="CARVAN_Logo" width={"100px"} />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
        <Nav className="me-auto">
          <Link className="nav-link" to="/brands">Brands</Link>
          <Link className="nav-link" to="/ranges">Range of Cars</Link>
          <Link className="nav-link" to="/cars">PreOwned Cars</Link>
          <Link className="nav-link" to="/about">About CARVAN</Link>
          <Link className="nav-link"  to="/contact">Contact Us</Link>
          <Link className="nav-link" to="/signup">
            <FaUserPlus />
            SignUp
          </Link>
          <Link className="nav-link" to="/signin">
            <FaUserCircle />
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
