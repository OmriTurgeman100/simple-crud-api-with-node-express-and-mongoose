const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });

const database = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL);
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

database();

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
