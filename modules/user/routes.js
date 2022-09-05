import express from 'express'
import * as controller from './controller.js'
import userValidator from './validator.js'

const router = express.Router()

router.get('/', controller.getAllusers)
router.post('/', userValidator, controller.createUser)

export default router