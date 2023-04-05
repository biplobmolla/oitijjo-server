import express from "express";
import { createProduct, getProducts } from "../controllers/products.js";

const productRouter = express.Router();

productRouter.post("/create/product", createProduct);
productRouter.get("/get/products", getProducts);

export default productRouter;
