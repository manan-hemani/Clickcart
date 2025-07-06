import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bestseller: {
    type: Boolean,
    required: true,
  },
});

const productModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default productModel;
