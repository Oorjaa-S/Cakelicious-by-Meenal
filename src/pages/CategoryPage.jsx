import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { categoryHierarchy } from "../data/categoryHierarchy";
import CakeCard from "../components/CakeCard";
import "../styles/CategoryPage.css";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import Categories from "../components/Categories";

function CategoryPage() {
  const { categoryName } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const [allCakes, setAllCakes] = useState([]);
  const subcategories = categoryHierarchy[categoryName] || [];

  useEffect(() => {
  getCakes();
}, [categoryName]);

  async function getCakes() {
    const { data, error } = await supabase
      .from("cakes")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
      return;
      
    }
    setAllCakes(data);
  }
  const filteredCakes = allCakes.filter((cake) => {

  const mainMatch =
    cake.categories?.includes(categoryName);

  if (!mainMatch) return false;

  if (selectedSubcategory === "All")
    return true;

  return cake.categories?.includes(
    selectedSubcategory
  );
});



  return (
    <>
    
    <Navbar />
    <TopBar/>
    <section className="category-page">

  <Categories showHeader={false} />

      <div className="section-header">
        <h1>{categoryName}</h1>
      </div>
      <div className="subcategory-grid">

  <div
    className={
      selectedSubcategory === "All"
        ? "subcategory-card active"
        : "subcategory-card"
    }
    onClick={() => setSelectedSubcategory("All")}
  >
    All Cakes
  </div>

  {subcategories.map((subcategory) => (

    <div
      key={subcategory}
      className={
        selectedSubcategory === subcategory
          ? "subcategory-card active"
          : "subcategory-card"
      }
      onClick={() =>
        setSelectedSubcategory(subcategory)
      }
    >
      {subcategory}
    </div>

  ))}

</div>

      <div className="cake-grid">
        {filteredCakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
          />
        ))}
      </div>

    </section>
    <ContactFooter />
    </>
  );
}

export default CategoryPage;