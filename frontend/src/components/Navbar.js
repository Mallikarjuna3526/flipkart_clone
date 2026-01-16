import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();



const { cart } = useCart();

<span className="cart-btn">
  Cart ({cart.length})
</span>


  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/?search=${query}`);
    }
  };

  return (
    <div className="navbar">
      <span className="logo" onClick={() => navigate("/")}>Flipkart</span>

      <input
        className="search-box"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />

      <span className="cart-btn" onClick={() => navigate("/cart")}>Cart</span>
    </div>
  );
}
