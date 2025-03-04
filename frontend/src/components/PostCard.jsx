import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import daysAgo from '../utils';

export default function PostCard({ image, createdAt, title, content }) {
  return (
    <Card 
      sx={{ 
        width: 300,  
        height: 400, 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        '&:hover': {
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }
      }}
    >
      <CardHeader
        title={
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: "1rem", 
              fontWeight: "bold",
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              textOverflow: "ellipsis"
            }}
          >
            {title}
          </Typography>
        }
        subheader={daysAgo(createdAt)}
      />
      
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 220, // Set a consistent image height
          objectFit: "cover", // Ensure the image covers without distortion
        }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary', 
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limit text to 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
