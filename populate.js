require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./models/product.js");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany(); // to clear the db and start fresh
    await Product.create(jsonProducts);
    console.log("connected to db from populate.js");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
