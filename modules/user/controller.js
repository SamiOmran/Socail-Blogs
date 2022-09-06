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