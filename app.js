require("dotenv").config();
require("express-async-errors");
const express = require("express");
const notFoundMiddleware = require("./middleware/not-found.js");
const errorMiddleware = require("./middleware/error-handler.js");
const connectDB = require("./db/connect.js");
const productsRouter = require("./routes/products.js");

const app = express();

const port = process.env.PORT || 3000;

// Middleware

app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

app.use("/api/v1/products", productsRouter);

// Products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
