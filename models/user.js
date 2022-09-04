import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: { type: String },
    age: { type: Number, required: true },
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

export default mongoose.model('User', userSchema)
