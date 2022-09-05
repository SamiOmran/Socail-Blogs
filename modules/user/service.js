import User from '../../models/user.js'

export const createUser = async (user) => {
    return await User.create(user)
}