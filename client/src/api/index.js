import axios from "axios";

const url = "http://localhost:5000/api/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(`${url}/create`, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/update/${id}`, updatedPost);
