import User from '../../models/user.js'
import mongoose from 'mongoose'

export const createUser = async (user) => {
    return await User.create(user)
}

export const getUserById = async (id) => {
    var userId = mongoose.Types.ObjectId(id);
    return await User.findById(userId)
}

export const getUserByEmail = async(email) => {
    return await User.getUserByEmail(email)
}