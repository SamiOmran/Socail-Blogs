import User from '../../models/user.js'
import mongoose from 'mongoose'

export const createUser = async (user) => {
    return await User.create(user)
}

export const deleteUserById = async (id) => {
    var userId = mongoose.Types.ObjectId(id)
    const user = await User.findById(userId)
    
    if (user) {
        await User.deleteOne({ _id: id })
        return true
    }
}