import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createPostAI, createPost } from '../services/postService';

function CreatePostAI() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState('');
  const [contact, setContact] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleSubmitToAI = async (event) => {
    event.preventDefault();
    try {
      const prompt = `Title: ${title}\nContent: ${content}`;
      const response = await createPostAI(prompt);
      setAiResponse(response.aiResponse);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      alert('Failed to get AI response.');
    }
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      content: aiResponse || content, // Use either AI Response or original content
      images: images.split(',').map(img => img.trim()),
      contact,
    };
    try {
      await createPost(newPost);
      alert('Post created successfully!');
      setTitle('');
      setContent('');
      setImages('');
      setContact('');
      setAiResponse('');
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
          <form onSubmit={handleSubmitToAI}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Ask to AI
            </Button>
          </form>
          <form onSubmit={handleCreatePost}>
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Post
            </Button>
          </form>
        </Box>
      </Box>
      {aiResponse && (
        <Box sx={{ mt: 4 }}>
          <h2>AI Response:</h2>
          <p>{aiResponse}</p>
        </Box>
      )}
    </div>
  );
}

export default CreatePostAI;
