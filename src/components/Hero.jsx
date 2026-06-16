import "../styles/Hero.css";
import { FaInstagram } from "react-icons/fa";
import FeaturedCake from "../assets/hero/Featured Cake.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">   

      <div className="hero-content">

        <div className="hero-left">

          <p className="hero-tag">
            HOME BAKERY • CUSTOM DESIGNS
          </p>

          <h1>
            Handcrafted Cakes
            <br />
            For Every Celebration
          </h1>

          <p className="hero-subtitle">
            Custom cakes made for birthdays,
            anniversaries, baby celebrations
            and every special occasion.
          </p>

          <div className="hero-buttons">
            <button
  onClick={() =>
    document
      .getElementById("categories")
      ?.scrollIntoView({
        behavior: "smooth"
      })
  }
>
  Browse Cakes
</button>
            <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth"
      })
  }
>
  Contact Us
</button>
          </div>

        </div>

        <div className="hero-right">

          <div className="hero-image-placeholder">
            <img
                src={FeaturedCake}
                alt="Featured Cake"
              />
          </div>

        </div>

      </div>
      </div>

    </section>
  );
}

export default Hero;