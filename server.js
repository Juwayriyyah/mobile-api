const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORT ROUTES
const userRoutes = require("./routes/users");

// USE ROUTES
app.use("/users", userRoutes);

// TEST ROUTES
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});

app.get("/hello-api-json", (req, res) => {
  res.send("Hello world, welcome to JS backend programming!");
});

app.get("/hello-api-jso", (req, res) => {
  res.json({ greeting: "Hello world! from backend and server-side" });
});

// CONNECT TO MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});