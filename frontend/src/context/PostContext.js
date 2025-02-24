import React, { createContext, useReducer } from 'react';

const PostContext = createContext();

const initialState = {
  posts: [],
  postDetail: {},
};

const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_POST_DETAIL':
      return { ...state, postDetail: action.payload };
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;