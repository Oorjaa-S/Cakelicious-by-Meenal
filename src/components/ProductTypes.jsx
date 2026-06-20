import "../styles/ProductTypes.css";
import { Link } from "react-router-dom";
import Cake from "../assets/Products/cake.jpeg";
import Cupcake from "../assets/Products/cupcake.jpeg";
import TeaCake from "../assets/Products/teacake.jpeg";

const products = [
  {
    title: "Custom Cakes",
    subtitle: "Custom celebration cakes",
    image: Cake,
    action: "scroll"
  },
  {
    title: "Cupcakes",
    subtitle: "Perfect bite-sized treats",
    image: Cupcake,
    link: "/category/Cupcakes"
  },
  {
    title: "Tea Cakes",
    subtitle: "Everyday indulgence",
    image: TeaCake,
    link: "/category/Tea Cakes"
  },
  {
    title: "More Coming Soon!"
  }
];

function ProductTypes() {
  return (
    <section className="product-types"  id="products">

      <div className="section-header">
        <p>OUR PRODUCTS</p>
        <h2>Something For Every Craving</h2>
      </div>

      <div className="products-grid">

        {products.map((product, index) => {

  if (product.link) {
    return (
      <Link
        to={product.link}
        className="product-card-link"
        key={index}
      >
        <div className="product-card">

          <div className="product-image">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
              />
            ) : (
              "Coming Soon"
            )}
          </div>

          <div className="product-content">
            <h3>{product.title}</h3>
            <p>{product.subtitle}</p>
          </div>

        </div>
      </Link>
    );
  }

  return (
    <div
      className="product-card"
      key={index}
      onClick={() =>
        document
          .getElementById("categories")
          ?.scrollIntoView({
            behavior: "smooth"
          })
      }
      style={{ cursor: "pointer" }}
    >

      <div className="product-image">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
          />
        ) : (
          "Coming Soon"
        )}
      </div>

      <div className="product-content">
        <h3>{product.title}</h3>
        <p>{product.subtitle}</p>
      </div>

    </div>
  );
})}

      </div>

    </section>
  );
}

export default ProductTypes;