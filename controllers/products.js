import productModel from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const data = req.body;
  try {
    const newProduct = productModel(data);
    await newProduct.save();
    res.status(201).json(data);
  } catch (err) {
    console.log({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch (err) {
    console.log({ message: err.message });
  }
};
