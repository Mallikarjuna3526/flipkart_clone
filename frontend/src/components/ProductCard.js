import { Link, useNavigate} from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.image_urls?.[0]}
        alt={product.name}
        onError={(e) => (e.target.src = "/placeholder.png")}
      />

      <div className="card-info">
        <p className="product-title">{product.name}</p>
        <p className="product-price">₹{product.price}</p>
      </div>
    </div>
  );
}