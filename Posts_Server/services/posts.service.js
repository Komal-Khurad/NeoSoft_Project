const PostsModel = require("../models/posts.model");

const insertPostsData = async (posts) => {
  // const skip = (params.currentPage - 1) * params.limit;
  try {
    const fetchedData = await PostsModel.find({})
      // .skip(skip)
      // .limit(params.limit)
      .lean()
      .exec();

    if (!fetchedData || fetchedData.length === 0) {
      await PostsModel.insertMany(posts);
      return await PostsModel.find({})
        // .skip(skip)
        // .limit(params.limit)
        .lean()
        .exec();
    } else return fetchedData;
  } catch (error) {
    console.log(`Error while storing data into DB ${error}`);
  }
};
module.exports = insertPostsData;
