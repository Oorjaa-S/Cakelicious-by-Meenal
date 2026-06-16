import "../styles/Categories.css";
import { Link } from "react-router-dom";
import Anniversary from "../assets/categories/anniversary.jpeg";
import Baby from "../assets/categories/baby.jpeg";
import Birthday from "../assets/categories/birthday2.jpeg";
import Kids from "../assets/categories/kids.jpeg";

const categories = [
  {
    title: "Birthday Cakes",
    subtitle: "Custom birthday creations",
    image: Birthday
  },
  {
    title: "Kids Birthday",
    subtitle: "Fun themes for little ones",
    image: Kids
  },
  {
    title: "Anniversary Cakes",
    subtitle: "Made for special milestones",
    image: Anniversary
  },
  {
    title: "Baby Celebration",
    subtitle: "Welcoming precious moments",
    image: Baby
  }
];

function Categories({ showHeader = true }) {

  return (
    <section className="categories" id="categories">
      
  {showHeader && (
  <div className="section-header">
    <p>OUR COLLECTIONS</p>
    <h2>Browse By Occasion</h2>
  </div>
)}

      <div className="category-grid">
        {categories.map((category, index) => (
          <Link
  to={`/category/${category.title}`}
  className="category-card"
  key={category.title}
>

            <div className="category-image">
  <img
    src={category.image}
    alt={category.title}
  />
</div>

            <div className="category-content">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}

export default Categories;