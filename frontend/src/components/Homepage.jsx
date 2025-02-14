import React, { useEffect, useState } from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchField from './SearchField';
import PostCard from './PostCard';
import Grid from '@mui/material/Grid2';
import Pagination from '@mui/material/Pagination';
const NUMBERPOST=15
function Homepage() {
  const [postList,setPostList]=useState([])
  
  const [currentPage,setCurrentPage]=useState(1)
  const handlePageChange=(_,value)=>{
      setCurrentPage(value)
  }
  
  useEffect(()=>{
    setPostList([
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"},
      {title:"sell car",image:"https://www.cars.com/images/sell/sale-dealer-woman.jpg",date:"1 day ago"}
    ])
  },[])
  return (
    <div>
      <Box sx={{
        mt: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Box sx={{ width: "100px" }} />
        <SearchField />
        <Button variant="contained" endIcon={<PostAddIcon />} size="large">
          Make Post
        </Button>
      </Box>
      <Grid 
  container 
  spacing={2} 
  
  sx={{ 
   mt: 5,
  width: "90%",
  ml: "auto",
  mr: "auto"
   }}
>
  {postList.slice((currentPage-1)*NUMBERPOST,currentPage*NUMBERPOST).map((item) => (
    <Grid 
      item 
      size={2.4}  // 12 ÷ 5 = 2.4 to get exactly 5 items per row
      key={item.id}
    >
      <Box
        sx={{
          border: '1px solidrgb(103, 91, 91)',
          borderRadius: '8px',
          
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderColor: '#bdbdbd'
          }
        }}
      >
        <PostCard 
          image={item.image} 
          title={item.title} 
          date={item.date}
        />
      </Box>
    </Grid>
  ))}
</Grid>
<Box display="flex" justifyContent="center" alignItems="center" marginTop={2} marginBottom={10}>
      <Pagination count={Math.ceil(postList.length/NUMBERPOST)} color="primary" onChange={handlePageChange}/>
    </Box>
    </div>
  );
}
export default Homepage