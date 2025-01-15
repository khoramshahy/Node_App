import dotenv from "dotenv";
import express from "express";
import path from "path";

import apiRoutes from "./config/apis.js";
import { connectDB } from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT;
const app = express();
const __dirname = path.resolve();

// middlewares
app.use(express.json()); //allows to accept json in req.body
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`app listening on port ${port}`);
});
