import User from '../../models/user.js'
import * as service from './service.js'

export const getAllusers = async (req, res) => {
    const allUsers = await User.find()
    let message = ''
    let status = 0

    if (allUsers.length === 0) {
        message = 'No users were found'
        status = 404;
    } else {
        message = 'Successfully found users'
        status = 200;
    }
    
    return res.status(status).json({message, data: allUsers});
}

export const createUser = async (req, res) => {
    try {
        const {email, password, firstName, lastName, age} = req.body
        service.createUser({email, password, firstName, lastName, age})
        return res.status(200).json('Success')
    } catch (err) {
        console.log(err);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await service.getUserById(req.params.id)
       return res.send(user)
    } catch (err) {
        return res.status(400).json({message:"Invalid ID"});
    }
}

export const updateUser = async (req, res) => {
    try {
       // const {email, password, firstName, lastName, age} = req.body
       const updatedUser = req.body
        const user = await service.updateUser(req.params.id, updatedUser)
       return res.send(user)
    } catch (err) {
        return res.status(400).json({message:"Invalid ID"});
    }
}

