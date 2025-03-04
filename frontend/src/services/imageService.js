import axios from 'axios';

export const uploadImages = async (files) => {
  const REACT_APP_IMAGE_UPLOAD_URL = process.env.REACT_APP_IMAGE_UPLOAD_URL;
  const uploadedUrls = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      console.log('Uploading image to:', REACT_APP_IMAGE_UPLOAD_URL);
      const response = await axios.post(REACT_APP_IMAGE_UPLOAD_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully:', response.data.imageUrl);
      uploadedUrls.push(response.data.imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  console.log('All images uploaded successfully:', uploadedUrls);
  return uploadedUrls;
};