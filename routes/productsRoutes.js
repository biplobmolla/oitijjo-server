import express from "express";
import {
  createProduct,
  getProduct,
  getProducts,
} from "../controllers/products.js";

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/get/products", getProducts);
productRouter.get("/get/product/:id", getProduct);

export default productRouter;
