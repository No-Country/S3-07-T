import { Router } from 'express'

import technologyController from '../controllers/technology.controller'
import AuthMiddlewares from '../middlewares/auth.middlewares'
const  { Auth, isModerator } = AuthMiddlewares

const router = Router()

const {
  addTechnology,
  listTechnologies,
  getTechnologyById,
  updateTechnology,
  removeTechnology,
} = technologyController

router.post('/tech', Auth, isModerator, addTechnology)

router.get('/tech', listTechnologies)

router.get('/tech/:id', getTechnologyById)

router.put('/tech/:id', Auth, updateTechnology)

router.delete('/tech/:id', Auth, removeTechnology)

export default router
