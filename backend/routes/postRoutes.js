const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.post('/', postController.createPost);
router.post('/createAI', postController.createPostAI);

module.exports = router;