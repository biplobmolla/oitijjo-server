import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    review: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
    },
    isLoved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = new mongoose.model("Products", ProductSchema);

export default productModel;
