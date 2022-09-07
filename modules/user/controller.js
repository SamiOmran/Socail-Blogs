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

export const deleteUserById = async (req, res) => {
    try {
        if (await service.deleteUserById(req.params.id)) {
            return res.status(200).json({ message: 'User deleted successfully' })
        }
        else
            return res.status(404).json({ message: 'User not found' })
    } catch (error) {
        console.log('errro thrown', error);
        return res.status(400).json({ message: 'Invalid Id' })
    }
}