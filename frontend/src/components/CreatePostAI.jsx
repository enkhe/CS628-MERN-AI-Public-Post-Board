import { Box, Button, TextField, IconButton, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/postService';
import { getPostRecommendation } from '../services/aiService';
import { uploadImages } from '../services/imageService';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ImageUpload from './ImageUpload';
import AIResponse from './AIResponse';

function CreatePostAI() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [contact, setContact] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [contentError, setContentError] = useState('');
  const [expandedImage, setExpandedImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmitToAI = async (event) => {
    event.preventDefault();
    let valid = true;

    if (!title) {
      setTitleError('Title is required');
      valid = false;
    } else {
      setTitleError('');
    }

    if (!content) {
      setContentError('Content is required');
      valid = false;
    } else {
      setContentError('');
    }

    if (!valid) return;

    setIsLoading(true);
    try {
      const prompt = `Title: ${title}\nContent: ${content}`;
      await getPostRecommendation(prompt, setAiResponse, setIsLoading);
    } catch (error) {
      console.error('Failed to get AI response:', error);
      alert('Failed to get AI response.');
      setIsLoading(false);
    }
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();
    const newPost = {
      title,
      content: aiResponse || content, // Use either AI Response or original content
      images: uploadedImages.concat(imageUrls.filter(url => url)),
      contact,
    };
    try {
      const createdPost = await createPost(newPost);
      alert('Post created successfully!');
      setTitle('');
      setContent('');
      setImageUrls(['']);
      setContact('');
      setAiResponse('');
      setUploadedImages([]);
      setImagePreviews([]);
      navigate(`/postdetail/${createdPost._id}`);
    } catch (error) {
      console.error('Failed to create post:', error);
      alert('Failed to create post.');
    }
  };

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const previews = files.map(file => URL.createObjectURL(file));

    try {
      const uploadedUrls = await uploadImages(files);
      setUploadedImages(prevImages => [...prevImages, ...uploadedUrls]);
      setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
    } catch (error) {
      alert('Error uploading images');
    }
  };

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  const handleAddImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const handleRemoveImageUrl = (index) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);
  };

  const handleRemoveImage = (index) => {
    const newUploadedImages = uploadedImages.filter((_, i) => i !== index);
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setUploadedImages(newUploadedImages);
    setImagePreviews(newImagePreviews);
  };

  const handleExpandImage = (imageUrl) => {
    setExpandedImage(imageUrl);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
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
              error={!!titleError}
              helperText={titleError}
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
              error={!!contentError}
              helperText={contentError}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {isLoading ? 'Loading...' : 'Ask to AI'}
            </Button>
          </form>
          <form onSubmit={handleCreatePost}>
            <ImageUpload
              imagePreviews={imagePreviews}
              uploadedImages={uploadedImages}
              imageUrls={imageUrls}
              handleImageUpload={handleImageUpload}
              handleImageUrlChange={handleImageUrlChange}
              handleAddImageUrl={handleAddImageUrl}
              handleRemoveImageUrl={handleRemoveImageUrl}
              handleRemoveImage={handleRemoveImage}
              handleExpandImage={handleExpandImage}
            />
            <TextField
              label="Contact Information"
              variant="outlined"
              fullWidth
              margin="normal"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Create Post
            </Button>
          </form>
        </Box>
      </Box>
      <AIResponse aiResponse={aiResponse} />
      <Modal
        open={!!expandedImage}
        onClose={handleCloseExpandedImage}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ position: 'relative', width: '80%', height: '80%' }}>
          <img src={expandedImage} alt="Expanded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          <IconButton
            onClick={handleCloseExpandedImage}
            sx={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}

export default CreatePostAI;
