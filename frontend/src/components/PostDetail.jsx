import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import ImageSlide from './ImageSlide';
function PostDetail() {
  const [postDetail,setPostDetail]=useState({})
  useEffect(()=>{
    setPostDetail({title:"SELL CAR",date:"02/14/2025",content:"selling my car toyota Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",images:["https://www.kbb.com/wp-content/uploads/2024/03/2012-honda-accord-front-3qtr.jpg?w=757","https://www.kbb.com/wp-content/uploads/2019/10/2013-honda-accord-frontside_hoaccsed131.jpg","https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/931/506/used-cars-2.jpg?ve=1&tl=1"],contact:"2000399399"})
  },[])
    return (
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
            width:"50%",
            textAlign:"left"
        }}>
            <h1>
                {postDetail.title}
            </h1>
            <h5> {postDetail.date}</h5>
            <div>
                <p>
                {postDetail.content}  
                </p>
            </div>
            <h3>Contact information: {postDetail.contact}</h3>

        </Box>
        <Box sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
         <ImageSlide images={postDetail.images}/>
        </Box>
    </Box>
  )
}

export default PostDetail