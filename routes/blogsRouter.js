const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blogController');

//index get
router.get('/', blogCtrl .blogIndex);

//create post
router.post('/', blogCtrl .createBlog);

//update put
router.put('/:id', blogCtrl .blogIndex.updateBlog);

//delete delete
router.delete('/:id', blogCtrl .deleteBlog);

//show get
router.get('/:id', blogCtrl .blogShow);

module.exports = router;
