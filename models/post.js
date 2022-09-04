const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {type: string, required: true},
    text: { type: string, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true }
})

export const Post = mongoose.model('Post')
