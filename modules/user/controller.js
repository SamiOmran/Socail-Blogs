import User from '../../models/user.js'
import * as service from './service.js'

export const getAllusers = async (req, res) => {
    return res.send(await User.find());
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

