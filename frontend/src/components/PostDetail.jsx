import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageSlide from './ImageSlide';
import { getPostDetail } from '../services/postService';
import { formatDate } from '../utils';

function PostDetail() {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await getPostDetail(id);
        console.log('Fetched post detail:', data); // Debugging statement
        setPostDetail(data);
      } catch (error) {
        console.error('Failed to fetch post detail:', error);
      }
    };

    fetchPostDetail();
  }, [id]);

  return (
    <Box sx={{
      mt: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly"
    }}>
      <Box sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "space-between",
        width: "50%",
        textAlign: "left"
      }}>
        <h1>{postDetail.title}</h1>
        <h5>{formatDate(postDetail.createdAt)}</h5>
        <div>
          <p>{postDetail.content}</p>
        </div>
        <h3>Contact information: {postDetail.contact}</h3>
      </Box>
      <Box sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <ImageSlide images={postDetail.images} />
      </Box>
    </Box>
  );
}

export default PostDetail;