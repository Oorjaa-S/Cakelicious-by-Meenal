import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Features from "../components/Features";
import Categories from "../components/Categories";
import FeaturedCakes from "../components/FeaturedCakes";
import ProductTypes from "../components/ProductTypes";
import Reviews from "../components/Reviews";
import ContactFooter from "../components/ContactFooter";


function Main() {
  return (
    <div className="site">

      
      <Navbar />
      <TopBar />

      <Hero />

      <Features />

      <Categories />

      <FeaturedCakes />

      <ProductTypes />

      <Reviews />

      <ContactFooter />

    </div>
  );
}

export default Main;