const Blog = require('../models/blog');

//Index 
 exports.blogIndex = async (req, res) => {
    try {
      // Create a new blog post 
      const allBlogs = await Blog.find({});
      res.json(allBlogs)
    } catch (e) {
     
      res.status(400).json({ error: e.message });
    }
  };
  
//Show
 exports.blogShow = async(res,req) => {
  try {
    const blog = await Blog.findOne({_id: req.params.id})
    res.json(blog)
  } catch (e) {
    res.status(400).json({error: e.message})
  }
 }
  
  //create 
  exports.createBlog = async (req, res) => {
    try {
      const blog = await Blog.create(req.body)
      res.json(blog)
    } catch (e) {
      res.status(400).json({error: e.message})
    }
  }
  
 //update
 exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate({_id: req.params.id}, req.body)
    res.json(blog)
  } catch (e) {
    res.status(400).json({error: e.message})
  }
 }
  
 //delete
 exports.deleteBlog = async (req, res) => {
  try {
    const foundBlog = await Blog.findByIdAndDelete({_id: req.param.id})
    res.sendStatus(204)
  } catch (error) {
    res.status(400).json({error: e.message})
  }
 }

 // Add comment **********
 exports.addComment = async (req, res) => {
  try {
    const blog = await Blog.findOne({_id: req.params.id})
    const comment = new Comment(req.body)
    blog.comments ?
    blog.comments.addToSet({_id: comment._id});
    blog.comments = [{_id: comment._id}]
    await comment.dispatchEvent()
  } catch (error) {
    
  }
 }
