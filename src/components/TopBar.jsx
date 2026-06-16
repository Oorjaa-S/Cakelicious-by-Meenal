import "../styles/Hero.css";
import { FaInstagram } from "react-icons/fa";

function TopBar() {
  return (
<div className="top-bar">
        
        <span>📞 +91 95401 68622</span>
        <span>📍 Bangalore</span>
        <a
  href="https://www.instagram.com/cakelicious_by_meenal/"
  target="_blank"
  rel="noreferrer"
    className="topbar-instagram"

>
  <FaInstagram /> Cakelicious_by_Meenal
</a>
      </div>
  );
}
export default TopBar;