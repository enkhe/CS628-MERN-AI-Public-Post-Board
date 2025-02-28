import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createPostAI } from '../services/postService';

function CreatePostAI() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [images, setImages] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      content: details,
      images: images.split(',').map(img => img.trim()),
      contact
    };
    try {
      await createPostAI(newPost);
      alert('Post created successfully!');
      setTitle('');
      setDetails('');
      setImages('');
      setContact('');
    
    } catch (error) {
      console.error('Failed to create post:', error);
      alert('Failed to create post.');
    }

  };

  return (
    <div>
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
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Details of the post"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <TextField
              label="Images (comma separated URLs)"
              variant="outlined"
              fullWidth
              margin="normal"
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
            
            <TextField
              label="Contact Information"
              variant="outlined"
              fullWidth
              margin="normal"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth >
              Create Post
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default CreatePostAI;