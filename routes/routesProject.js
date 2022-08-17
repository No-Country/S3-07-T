import { Router } from 'express'
import projectController from '../controllers/project.controller'

const { createProject, GetAllProjects, GetProjectById } = projectController

const router = Router()

router.post('/project', createProject)
router.get('/project', GetAllProjects)
router.get('/project/:id', GetProjectById)

export default router
