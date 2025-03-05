import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

function PostCard({ image, title, createdAt, content }) {
  const truncatedTitle = title.length > 50 ? title.substring(0, 50) + '...' : title;
  const truncatedContent = content.length > 100 ? content.substring(0, 100) + '...' : content;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {truncatedTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDistanceToNow(new Date(createdAt))} ago
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedContent}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostCard;