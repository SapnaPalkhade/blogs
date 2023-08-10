const blog = require('../models/blog');
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {type: String, require: true}
}, {
    timestamps: true
});

const comment  = mongoose.model('Comment', commentSchema);

module.exports = Comment

