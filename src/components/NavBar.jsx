import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
  Cakelicious by Meenal
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