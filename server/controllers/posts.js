import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
