const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

// ✅ CORS Configuration - Allow the frontend to make requests to the backend
// const corsOptions = {
//   origin: 'https://special-fortnight-4jq9v4vj94wpf76gp-3000.app.github.dev',  // Replace with your actual frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// // Load environment variables from .env file
// config();
// Enable CORS for any origin
const corsOptions = {
    origin: '*', // Allow any origin
};
 
// app.use(cors(corsOptions));
 
// Handle preflight requests
app.options('*');

app.use(cors(corsOptions));  // Apply CORS middleware to the express app

// ✅ Handle preflight requests for CORS
// app.options('*', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.sendStatus(200);
// });

// ✅ Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.content || "Please provide a message.";

  // ✅ Set headers for SSE (Server-Sent Events)
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders(); // Flush headers to establish SSE connection

  try {
    // ✅ Send the request to Gemma 2:2b model
    const axiosResponse = await axios({
      method: 'post',
      url: 'http://localhost:11434/api/generate',  // Replace with actual API URL for Gemma model
      data: {
        model: 'gemma2:2b',
        prompt: userMessage,
      },
      responseType: 'stream',  // Enable streaming response from the model
    });

    // ✅ Stream the response from Gemma model to the client
    axiosResponse.data.on('data', (chunk) => {
      const chunkStr = chunk.toString();
      res.write(`data: ${chunkStr}\n\n`);  // Send each chunk as an SSE event
    });

    axiosResponse.data.on('end', () => {
      res.write('data: [DONE]\n\n');  // Indicate the end of the response
      res.end();
    });

  } catch (error) {
    console.error('Error during chat response streaming:', error);
    res.status(500).json({ error: 'Failed to process the request with Gemma 2:2b.' });
  }
});

// ✅ Start the server on the specified port
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
