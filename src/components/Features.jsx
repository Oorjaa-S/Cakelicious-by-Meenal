import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <div className="features-header">
        <p>WHY CHOOSE US</p>

        <h2>
          Crafted With Care,
          Baked With Love
        </h2>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <div className="feature-icon">🎂</div>

          <h3>Custom Designs</h3>

          <p>
            Personalized cakes
            designed for every
            celebration.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧁</div>

          <h3>Premium Ingredients</h3>

          <p>
            Fresh ingredients and
            quality flavors in every
            bake.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">✨</div>

          <h3>Handcrafted</h3>

          <p>
            Every cake is baked and
            decorated with attention
            to detail.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">❤️</div>

          <h3>Made For Celebrations</h3>

          <p>
            Birthdays, anniversaries,
            baby celebrations and
            special moments.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;