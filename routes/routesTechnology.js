import { Router } from 'express'

import technologyController from '../controllers/technology.controller'
import AuthMiddleware from '../middlewares/auth.middlewares'

const router = Router()

const { auth } = AuthMiddleware

const {
  addTechnology,
  listTechnologies,
  getTechnologyById,
  updateTechnology,
  removeTechnology,
} = technologyController

router.post('/tech', auth, addTechnology)

router.get('/tech', auth, listTechnologies)

router.get('/tech/:id', auth, getTechnologyById)

router.put('/tech/:id', auth, updateTechnology)

router.delete('/tech/:id', auth, removeTechnology)

export default router
