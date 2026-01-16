import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchProducts, searchProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [params] = useSearchParams();
  const query = params.get("search");

  useEffect(() => {
    setLoading(true);

    const apiCall = query
      ? searchProducts(query)
      : fetchProducts();

    apiCall
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p style={{ padding: 20 }}>Loading products...</p>;

  return (
    <div className="home-container">
      <div className="product-grid">
        {products.length === 0 && <p>No products found</p>}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
