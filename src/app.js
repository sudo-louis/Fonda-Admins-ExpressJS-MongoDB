const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const adminAuthRoutes = require("./routes/adminAuthRoutes");
const adminProtectedRoutes = require("./routes/adminProtectedRoutes");
const productRoutes = require("./routes/productRoutes");
const providerRoutes = require("./routes/providerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin", adminProtectedRoutes);
app.use("/api/products", productRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/categories", categoryRoutes);

module.exports = app;