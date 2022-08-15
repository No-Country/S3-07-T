import { Router } from 'express'
import { Auth } from '../middlewares/auth.middlewares'
import {
  createProject,
  GetAllProjects,
  GetProjectById,
} from '../controllers/project.controller'

const router = Router()

router.post('/project', Auth, createProject)
router.get('/project', GetAllProjects)
router.get('/project/:id', GetProjectById)

export default router