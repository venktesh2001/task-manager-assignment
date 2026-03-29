console.log("APP LOADED");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// ✅ ADD THIS ROUTE
app.get("/test", (req, res) => {
  res.send("API WORKING");
});

// ✅ YOUR ROUTES
app.use("/api/v1/auth", require("./src/routes/authRoutes"));
app.use("/api/v1/tasks", require("./src/routes/taskRoutes"));

module.exports = app;