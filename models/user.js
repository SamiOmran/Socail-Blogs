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

userSchema.pre('save', function(next) {
    let fullName = [this.firstName, this.lastName].filter(Boolean).join(' ')
    this.fullName = fullName;
    next()
})

userSchema.pre('updateOne', function(next) {
    let fullName = [this.firstName, this.lastName].filter(Boolean).join(' ')
    this.fullName = fullName;
    next()
})

export default mongoose.model('User', userSchema)
