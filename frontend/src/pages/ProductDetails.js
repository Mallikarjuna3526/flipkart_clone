import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById, addToCart } from "../api/api";
import { useCart } from "../context/CartContext";
import ImageGallery from "../components/ImageGallery";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { refreshCart } = useCart();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p style={{ padding: 20 }}>Loading...</p>;
  

const handleBuyNow = async () => {
  await addToCart({ product_id: product.id, quantity: 1 });
  await refreshCart();
  navigate("/checkout"); // ✅ DIRECT CHECKOUT
};

  const handleAddToCart = async () => {
    await addToCart({ product_id: product.id, quantity: 1 });
    await refreshCart();
    alert("Added to cart");
  };

  return (
    <div className="product-page">
      {/* LEFT: IMAGES */}
      <ImageGallery images={product.image_urls} />

      {/* RIGHT: DETAILS */}
      <div className="details">
        <h2 className="title">{product.name}</h2>

        <p className="price">₹{product.price}</p>

        <p className={product.stock > 0 ? "in-stock" : "out-stock"}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <p className="desc">{product.description}</p>

        <div className="action-buttons">
          <button className="add-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
