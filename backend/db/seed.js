require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('../models/Post'); // Adjusted the path to the Post model
const posts = require('../data/postsData'); // Adjusted the path to the posts data

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    for (const post of posts) {
      const existingPost = await Post.findOne({ title: post.title });
      if (existingPost) {
        console.log(`Post with title "${post.title}" already exists. Skipping...`);
      } else {
        await Post.create(post);
        console.log(`Post with title "${post.title}" inserted.`);
      }
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

seedDatabase();

// node seed.js