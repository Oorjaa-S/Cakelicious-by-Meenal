import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
<Link to="/" className="logo">
  <img src={Logo} alt="Cakelicious by Meenal" />
  <span>Cakelicious by Meenal</span>
</Link>

      <div className="nav-links">
       <HashLink smooth to="/#categories">
  Categories
</HashLink>
<HashLink smooth to="/#featured">
  Featured
</HashLink>

<HashLink smooth to="/#reviews">
  Reviews
</HashLink>
<a href="/#contact">Contact</a>
<HashLink smooth to="/#products">
  Products
</HashLink>
      </div>
      
      <a
        href="https://wa.me/919540168622"
        target="_blank"
        rel="noreferrer"
        className="order-btn"
      >
        Order Now
      </a>

    </nav>
  );
}

export default Navbar;
