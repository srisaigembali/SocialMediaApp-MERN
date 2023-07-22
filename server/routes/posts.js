import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/:id", getPost);
router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.post("/create", auth, createPost);
router.patch("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);
router.patch("/like/:id", auth, likePost);
router.post("/:id/commentPost", commentPost);

export default router;
