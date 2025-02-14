import React from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

function SearchField() {
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
        sx={{
          width: '100%',
        }}
      />
    </Box>
  );
}

export default SearchField;