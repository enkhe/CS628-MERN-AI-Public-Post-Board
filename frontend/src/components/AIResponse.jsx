import React from 'react';
import { Box } from '@mui/material';

const AIResponse = ({ aiResponse }) => {
  return (
    aiResponse && (
      <Box sx={{ mt: 4 }}>
        <h2>AI Response:</h2>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{aiResponse}</pre>
      </Box>
    )
  );
};

export default AIResponse;