import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productsRoutes.js";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/oitijjo")
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log({ message: err.message }));

app.use(express.json());

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000/");
});
