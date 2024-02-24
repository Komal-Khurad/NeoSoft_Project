const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const PostsModel = mongoose.model("Post", postsSchema);

module.exports = PostsModel;
