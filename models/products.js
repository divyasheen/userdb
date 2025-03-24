import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["men", "women", "kids"],
  },
  description: String
});

const Product = model("Product", productSchema);
export default Product;