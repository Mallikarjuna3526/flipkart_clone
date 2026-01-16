const pool = require("../config/db");

exports.getCart = async () => {
  const result = await pool.query(`
    SELECT c.id, p.name, p.price, c.quantity, p.image_urls
    FROM cart_items c
    JOIN products p ON c.product_id = p.id
  `);
  return result.rows;
};

exports.addItem = async (product_id, quantity) => {
  const result = await pool.query(
    "INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2) RETURNING *",
    [product_id, quantity]
  );
  return result.rows[0];
};

exports.updateQuantity = async (id, quantity) => {
  const result = await pool.query(
    "UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *",
    [quantity, id]
  );
  return result.rows[0];
};

exports.removeItem = async (id) => {
  await pool.query("DELETE FROM cart_items WHERE id = $1", [id]);
};
