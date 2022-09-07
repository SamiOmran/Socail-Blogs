import express from 'express'
import * as controller from './controller.js'
import userValidator from './validator.js'

const router = express.Router()

router.post('/', userValidator, controller.createUser)

router.get('/', controller.getAllusers)

router.delete('/:id', controller.deleteUserById)
export default router