import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: response });
  } catch (error) {
    console.log(error.message);
  }
};
