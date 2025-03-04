import axios from 'axios';

const GEMMA_API_URL = process.env.REACT_APP_GEMMA_API_URL;

export const getPostRecommendation = async (input, setResult, setIsLoading) => {
  try {
    const response = await fetch(GEMMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: input, stateless: true }), // Ensure the request is stateless
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    // Stream the response in chunks
    let done = false;
    let accumulatedResult = '';  // For accumulating parsed response

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunk = decoder.decode(value, { stream: true });

      // Split by lines, in case multiple chunks are sent in one packet
      const lines = chunk.split('\n');

      lines.forEach((line) => {
        if (line.startsWith('data:')) {
          try {
            // Parse each SSE event data chunk
            const parsedData = JSON.parse(line.replace('data: ', ''));
            
            if (parsedData.response) {
              // Accumulate the parsed 'response' field
              accumulatedResult += parsedData.response;
              setResult(accumulatedResult);
            }

            // Check if the response is marked as 'done'
            if (parsedData.done) {
              setIsLoading(false);
            }
          } catch (err) {
            console.error('Error parsing JSON chunk:', err);
          }
        }
      });
    }

  } catch (error) {
    console.error('Error getting post recommendation using AI:', error);
    throw error;
  }
};