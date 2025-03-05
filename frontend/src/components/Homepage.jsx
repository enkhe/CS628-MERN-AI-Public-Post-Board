import React, { useEffect, useContext, useState, useCallback } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchField from './SearchField';
import PostCard from './PostCard';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../services/postService';
import PostContext from '../context/PostContext';

const NUMBERPOST = 15;

function Homepage() {
  const { state, dispatch } = useContext(PostContext);
  const { posts } = state;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const fetchPostList = useCallback(async (keyword) => {
    try {
      const data = await getPostList(keyword);
      dispatch({ type: 'SET_POSTS', payload: data });
    } catch (error) {
      console.error('Failed to fetch post list:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPostList();
  }, [fetchPostList]);

  // Sort posts by creation date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <Box sx={{
        mt: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Box sx={{ width: "100px" }} />
        <SearchField fetchPostList={fetchPostList} />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <NavLink to="/createpostAI" style={{ textDecoration: "none" }}>
            <Button variant="contained" endIcon={<PostAddIcon />} size="large">
              Make Post with AI Assistant
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 5,
          width: "90%",
          ml: "auto",
          mr: "auto"
        }}
      >
        {sortedPosts.slice((currentPage - 1) * NUMBERPOST, currentPage * NUMBERPOST).map((item) => (
          <Grid
            item
            xs={12} sm={6} md={4} lg={3} xl={2.4}  // Responsive breakpoints
            key={item._id}
          >
            <NavLink to={`/postdetail/${item._id}`} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  border: '1px solid rgb(103, 91, 91)',
                  borderRadius: '8px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  '&:hover': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    borderColor: '#bdbdbd'
                  },
                  height: '100%'  // Ensure the box takes full height
                }}
              >
                <PostCard
                  image={item.images?.[0]}
                  title={item.title}
                  createdAt={item.createdAt}
                  content={item.content}
                />
              </Box>
            </NavLink>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={10}>
        <Pagination count={Math.ceil(posts.length / NUMBERPOST)} color="primary" onChange={handlePageChange} />
      </Box>
    </div>
  );
}

export default Homepage;