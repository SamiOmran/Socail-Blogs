import { validationResult } from 'express-validator'
import rules from '../modules/user/validator'

export default function validate(req, res, next) {
    return [...rules, async (req, res, next) => {
        
    }
    ]
}