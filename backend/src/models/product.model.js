const pool = require("../config/db");

exports.getAll = async () => {
  const result = await pool.query("SELECT * FROM products");
  console.log(result)
  return result.rows;
};

exports.getById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

exports.search = async (query) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE LOWER(name) LIKE LOWER($1)",
    [`%${query}%`]
  );
  return result.rows;
};

exports.filterByCategory = async (category) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE category = $1",
    [category]
  );
  return result.rows;
};
