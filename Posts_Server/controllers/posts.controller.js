const axios = require("axios");
const insertPostsData = require("../services/posts.service");

const addPostsData = async (req, res) => {
  const params = {
    limit: parseInt(req.params.limit) || 10,
    currentPage: parseInt(req.params.currentPage) || 1,
    searchQuery: req.params.searchQuery || "",
    sortField: req.params.sortField || "id",
    sortOrder: req.params.sortOrder || "asc",
  };
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postsData = response.data;
    const addedData = await insertPostsData(postsData, params);
    res
      .status(200)
      .json({ message: "Posts fetched and saved to database successfully!", addedData });
  } catch (error) {
    console.error("Error fetching and saving posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = addPostsData;
