const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const addPostsData = require("./controllers/posts.controller");
const { mongoUrl } = require("./config/dbConfig");

const app = express();

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo DB Connected.");
  });

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Posts MERN Application." });
});
app.get("/store-posts", addPostsData);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
