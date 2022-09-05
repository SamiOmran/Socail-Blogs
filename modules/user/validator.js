import { body } from 'express-validator'

const rules = [
    body('email')
        .isEmail().withMessage('Invalid email address').bail,
    body('password')
        .isStrongPassword({ minLength: 6, minNumbers: 2 }),
    body('firstName')
        .isLength({ min: 4, max: 20 }),
    body('lastName')
        .isLength({ min: 4, max: 20 }),
]

export default rules;

