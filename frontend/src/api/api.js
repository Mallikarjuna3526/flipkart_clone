import { BASE_URL } from "../config";

export const fetchProducts = () =>
  fetch(`${BASE_URL}/products`).then(res => res.json());

export const fetchProductById = (id) =>
  fetch(`${BASE_URL}/products/${id}`).then(res => res.json());

export const searchProducts = (query) =>
  fetch(`${BASE_URL}/products/search/${query}`).then(res => res.json());

export const fetchByCategory = (category) =>
  fetch(`${BASE_URL}/products/category/${category}`).then(res => res.json());

export const getCart = () =>
  fetch(`${BASE_URL}/cart`).then(res => res.json());

export const addToCart = (data) =>
  fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const updateCart = (id, quantity) =>
  fetch(`${BASE_URL}/cart/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity })
  });

export const removeFromCart = (id) =>
  fetch(`${BASE_URL}/cart/${id}`, { method: "DELETE" });

export const placeOrder = (address) =>
  fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address })
  }).then(res => res.json());
