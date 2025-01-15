import mongoose from "mongoose";
import Product from "./product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (message) {
    console.error(`Server Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (message) {
    console.error(`Server Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price) {
    return res
      .status(400)
      .send({ success: false, message: "Please provide all required fields" });
  }

  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(`Server Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(`Server Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }

    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(`Server Error: ${error.message}`);
    res.status(500).json({ success: fale, message: "Server Error" });
  }
};

export {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
};
