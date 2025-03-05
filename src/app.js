const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const adminAuthRoutes = require("./routes/adminAuthRoutes");
const adminProtectedRoutes = require("./routes/adminProtectedRoutes");

app.use("/api/admin/auth", adminAuthRoutes);
app.use("/api/admin", adminProtectedRoutes);

module.exports = app;