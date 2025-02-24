const posts = require('../data/postsData');

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
};

exports.createPost = (req, res) => {
  const { title, content, images, date, contact } = req.body;
  const newPost = {
    id: require('uuid').v4(), // Generate a unique ID for the new post
    title,
    content,
    images,
    date,
    contact
  };
  posts.push(newPost);
  res.status(201).json(newPost);
};