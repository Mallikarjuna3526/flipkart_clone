const pool = require("../config/db");
const calculateTotal = require("../utils/calculateTotal");

exports.createOrder = async (address) => {
  const cartItems = await pool.query(`
    SELECT c.product_id, c.quantity, p.price
    FROM cart_items c
    JOIN products p ON c.product_id = p.id
  `);

  const total = calculateTotal(cartItems.rows);

  const orderResult = await pool.query(
    "INSERT INTO orders (total_amount, address) VALUES ($1, $2) RETURNING *",
    [total, address]
  );

  const orderId = orderResult.rows[0].id;

  for (let item of cartItems.rows) {
    await pool.query(
      `INSERT INTO order_items (order_id, product_id, quantity, price)
       VALUES ($1, $2, $3, $4)`,
      [orderId, item.product_id, item.quantity, item.price]
    );
  }

  await pool.query("DELETE FROM cart_items");

  return orderResult.rows[0];
};

exports.getOrderById = async (id) => {
  const order = await pool.query(
    "SELECT * FROM orders WHERE id = $1",
    [id]
  );

  const items = await pool.query(
    "SELECT * FROM order_items WHERE order_id = $1",
    [id]
  );

  return { order: order.rows[0], items: items.rows };
};
