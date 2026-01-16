import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { updateCart, removeFromCart } from "../api/api";
import "../styles/Cart.css";

export default function Cart() {
  const { cart, refreshCart } = useCart();
  const navigate = useNavigate();
console.log(cart)
  const updateQty = async (id, qty) => {
    if (qty < 1) return;
    await updateCart(id, Number(qty));
    refreshCart();
  };

  const removeItem = async (id) => {
    await removeFromCart(id);
    refreshCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h3 style={{ padding: 30 }}>Your cart is empty</h3>;
  }

  return (
    <div className="cart-page">
      {/* LEFT: CART ITEMS */}
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-card">
            <img
              src={item.image_urls?.[0]|| "/placeholder.png"}
              alt={item.name}
              onError={(e) => (e.target.src = "/placeholder.png")}
            />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: SUMMARY */}
      <div className="cart-summary">
        <h3>Price Details</h3>
        <p>Total Items: {cart.length}</p>
        <h2>Total: ₹{total}</h2>

        {/* ✅ CHECKOUT BUTTON */}
        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
