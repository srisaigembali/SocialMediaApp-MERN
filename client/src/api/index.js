import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const data = localStorage.getItem("memoryprofile");
  if (data) {
    req.headers.Authorization = `Bearer ${JSON.parse(data).token}`;
  }
  return req;
});

export const fetchPost = (id) => API.get(`/api/posts/${id}`);
export const fetchPosts = (page) => API.get(`/api/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/api/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const createPost = (newPost) => API.post("/api/posts/create", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/api/posts/update/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/api/posts/delete/${id}`);
export const likePost = (id) => API.patch(`/api/posts/like/${id}`);

export const signIn = (formData) => API.post("/api/users/signin", formData);
export const signUp = (formData) => API.post("/api/users/signup", formData);

export const comment = (value, id) =>
  API.post(`/api/posts/${id}/commentPost`, { value });
