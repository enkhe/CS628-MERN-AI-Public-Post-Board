import React, {useEffect, useState} from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

function SearchField(props) {
  const {fetchPostList}=props
  const [searchInput,setSearchInput]=useState("")
  const handleSearchInput=(e)=>{
    setSearchInput(e.target.value)
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        fetchPostList(searchInput)
    }}
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '4px 8px',
        width: '300px',  // you can adjust this width
        '&:hover': {
          border: '1px solid #666',
        }
      }}
    >
      <SearchIcon sx={{ color: 'gray', mr: 1 }} />
      <InputBase
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchInput}
        onKeyDown={handleKeyPress}
        sx={{
          width: '100%',
        }}
      />
    </Box>
  );
}

export default SearchField;