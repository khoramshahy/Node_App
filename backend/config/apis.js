import express from "express";
import productRoutes from "../products/product.route.js";

const apiRoutes = express.Router();

apiRoutes.use("/products", productRoutes);

export default apiRoutes;
