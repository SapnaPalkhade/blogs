const mongoose = require('mongoose')

const blogsSchema = mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    comments: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
}, {
    timesstamps: true
})

const blog = mongoose.model('blog', blogsSchema)

module.exports = blog