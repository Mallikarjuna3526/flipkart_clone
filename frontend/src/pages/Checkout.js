import { useState } from "react";
import { placeOrder } from "../api/api";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

export default function Checkout() {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    const order = await placeOrder(address);
    navigate(`/order-success/${order.id}`);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h2>Shipping Address</h2>
        <textarea
          placeholder="Enter your full delivery address"
          onChange={e => setAddress(e.target.value)}
        />
        <button className="place-order-btn" onClick={submit}>
          Place Order
        </button>
      </div>
    </div>
  );
}
