import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function PostCard({image,date,title}) {
 

  return (
    <Card sx={{ maxWidth: 345, border:"outset"}} >
      <CardHeader
        
        
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          I want to sell my car with 2000$
          
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}