import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPost);
router.patch("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.patch("/like/:id", likePost);

export default router;
