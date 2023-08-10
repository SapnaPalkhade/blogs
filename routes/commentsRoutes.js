const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');


router.post('/', commentController.createComment);

// Get all comments for a specific blog post
router.get('/blog/:blogId', commentController.getCommentsByBlogId);

// Get a specific comment by its ID
router.get('/:id', commentController.getCommentById);

// Update a specific comment by its ID
router.put('/:id', commentController.updateComment);

// Delete a specific comment by its ID
router.delete('/:id', commentController.deleteComment);

module.exports = router;
