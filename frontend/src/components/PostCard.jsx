import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import daysAgo from '../utils';

export default function PostCard({ image, createdAt, title, content }) {
  return (
    <Card sx={{ maxWidth: 345, border: "outset" }}>
      <CardHeader
        title={title}
        subheader={daysAgo(createdAt)}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content.slice(0,100)}...
        </Typography>
      </CardContent>
    </Card>
  );
}