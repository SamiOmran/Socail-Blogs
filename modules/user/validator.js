import { body } from 'express-validator'
import validate from '../../core/errorMiddleware.js';

const rules = [
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),
    body('password')
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }).
        withMessage('password should be at least 8 characters, 1 lowercase, 1 uppercase, 1 symbols, 1 numbers'),
    body('firstName')
        .isLength({ min: 4, max: 20 }),
    body('lastName')
        .isLength({ min: 4, max: 20 }),
    body('age')
        .custom(value => {
            if (value < 10)
                return Promise.reject('User should be older than 10 years old')
            return Promise.resolve
        })
]

export default validate(rules);

