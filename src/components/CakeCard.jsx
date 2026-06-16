import { Link } from "react-router-dom";
import "../styles/CakeCard.css";

function CakeCard({ cake }) {
  return (
    <Link
      to={`/cake/${cake.id}`}
      className="cake-card-link"
    >
      <div className="cake-card">

        <div className="cake-image">
          <img
            src={cake.image_url}
            alt={cake.name}
          />
        </div>

        <div className="cake-content">
          <h3>{cake.name}</h3>
          <p>{cake.flavour}</p>
        </div>

      </div>
    </Link>
  );
}

export default CakeCard;