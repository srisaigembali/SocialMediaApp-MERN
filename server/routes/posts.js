import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", auth, createPost);
router.patch("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);
router.patch("/like/:id", auth, likePost);

export default router;
