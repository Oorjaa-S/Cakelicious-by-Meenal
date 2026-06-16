import "../styles/ContactFooter.css";
import { FaInstagram } from "react-icons/fa";

function ContactFooter() {
  return (
    <section className="contact-footer" id="contact">

      <div className="footer-cta">

        <p>LET'S CREATE SOMETHING SPECIAL</p>

        <h2>
          Ready To Order Your Dream Cake?
        </h2>

        <span>
          Custom cakes crafted for birthdays,
          anniversaries, baby celebrations and
          every memorable occasion.
        </span>

        <a
          href="https://wa.me/9540168622"
          target="_blank"
          rel="noreferrer"
          className="footer-whatsapp"
        >
          Order On WhatsApp
        </a>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-content">

        <div className="footer-brand">

          <h3>Cakelicious by Meenal</h3>

          <p>
            Home bakery creating custom cakes
            for every celebration.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <a href="#categories">Categories</a>
          <a href="#featured">Featured Cakes</a>
          <a href="#reviews">Reviews</a>

        </div>

        <div className="footer-contact">

          <h4>Contact</h4>

          <p>📞 +91 95401 68622</p>
          <p>📍 Bangalore</p>
          <a
  href="https://www.instagram.com/cakelicious_by_meenal/"
  target="_blank"
  rel="noreferrer"
>
  <FaInstagram /> Instagram
</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Cakelicious by Meenal
      </div>

    </section>
  );
}

export default ContactFooter;