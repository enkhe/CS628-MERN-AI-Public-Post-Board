import React from 'react';
import { Box, TextField, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ImageUpload = ({
  imagePreviews,
  uploadedImages,
  imageUrls,
  handleImageUpload,
  handleImageUrlChange,
  handleAddImageUrl,
  handleRemoveImageUrl,
  handleRemoveImage,
  handleExpandImage,
}) => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        style={{ marginTop: '16px' }}
      />
      {imagePreviews.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <h3>Image Previews:</h3>
          <div>
            {imagePreviews.map((preview, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  style={{ width: '100px', marginRight: '10px', cursor: 'pointer' }}
                  onClick={() => handleExpandImage(preview)}
                />
                <TextField
                  label={`Image URL ${index + 1}`}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={uploadedImages[index]}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <IconButton onClick={() => handleRemoveImage(index)} sx={{ ml: 1, color: 'white' }}>
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))}
          </div>
        </Box>
      )}
      {imageUrls.map((url, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          {url && (
            <img
              src={url}
              alt={`Preview ${index}`}
              style={{ width: '100px', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => handleExpandImage(url)}
            />
          )}
          <TextField
            label={`Image URL ${index + 1}`}
            variant="outlined"
            fullWidth
            margin="normal"
            value={url}
            onChange={(e) => handleImageUrlChange(index, e.target.value)}
          />
          <IconButton onClick={() => handleRemoveImageUrl(index)} sx={{ ml: 1, color: 'white' }}>
            <RemoveIcon />
          </IconButton>
        </Box>
      ))}
      {imageUrls.filter(url => url === '').length < 1 && (
        <Button onClick={handleAddImageUrl} variant="contained" color="secondary" fullWidth sx={{ mt: 2, color: 'white' }}>
          <AddIcon /> Add Image URL
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;