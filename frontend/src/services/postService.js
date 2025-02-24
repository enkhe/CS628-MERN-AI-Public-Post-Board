import axios from 'axios';

const API_URL = 'https://bug-free-space-spork-j9qpg6r5qg2p65q-3001.app.github.dev/api/posts'; // Adjust the URL as needed

export const getPostList = async () => {
  try {
    const response = await axios.get(API_URL);
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