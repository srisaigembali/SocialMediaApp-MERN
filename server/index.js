import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/mongodb.js";
import PostsRouter from "./routes/posts.js";

// configure .env
dotenv.config();
const PORT = process.env.PORT || 5050;

// configure database
ConnectDB();

const app = express();

// middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routes
app.use("/api/posts", PostsRouter);

// run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});