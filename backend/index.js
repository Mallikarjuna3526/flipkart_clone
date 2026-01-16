require("dotenv").config();
const app = require("./src/app");

const pool = require("./src/config/db");

pool.query("SELECT 1")
  .then(() => console.log("✅ Supabase DB connected"))
  .catch(err => console.error("❌ DB connection failed", err));


pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error("DB Error:", err);
  else console.log("DB Connected:", res.rows[0]);
});
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



