const express = require("express");
const router = express.Router();
const User = require("../models/User");

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Users route working");
});
app.get("/hello-api-json") , (req, res)=> {
    res.send ("Hello world, welcome to Js backend programming!")
};

app.get("/hello-api-jso", (req, res)=> {
    res.send({greeting: "Hello world! from backend and server-side"})
});

app.listen(PORT, ()=>{
   console.log ("Hello world API app listening on port  "+PORT)
});
// CREATE
router.post("/", async (req, res) => {
  const user = new User(req.body);
  const savedUser = await user.save();
  res.json(savedUser);
});

// READ ALL
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedUser);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;