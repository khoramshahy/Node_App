import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./product.controller.js";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);

productRoutes.get("/:id", getProductById);

productRoutes.post("/", createProduct);

productRoutes.patch("/:id", updateProduct);

productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
