import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    text: { type: String, required: true },
    //userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
})

export default mongoose.model('Post', postSchema)
