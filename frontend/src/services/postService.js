import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getPostList = async (keyword) => {
  try {
    const url=keyword?`${API_URL}?searchKeyword=${keyword}`:API_URL
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching post list:', error);
    throw error;
  }
};

export const getPostDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post detail:', error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};
