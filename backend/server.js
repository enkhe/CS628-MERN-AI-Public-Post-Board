// Load environment variables from .env file
require('dotenv').config(); 

// Import required modules
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Bring MongoDB connection function from db.js
const postRoutes = require('./routes/postRoutes');
const chatRoutes = require('./routes/chatRoutes');

// Initialize the Express application
const app = express();
const port = process.env.PORT || 3001;

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors({
  origin: "*", // To use certain domain; "https://special-fortnight-4jg94vj4wp76gp-3001.app.github.dev"
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Execute MongoDB connection
connectDB();

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the postRoutes for handling requests to /api/posts
app.use('/api/posts', postRoutes);

// Use the chatRoutes for handling requests to /api/chat
app.use('/api/chat', chatRoutes);

// Start the server and listen on the specified port
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});