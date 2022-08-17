import { Router } from 'express'
import projectController from '../controllers/project.controller'

const {
  createProject,
  GetAllProjects,
  GetProjectById,
  UpdateProject,
  addCategoryToProject,
} = projectController

const router = Router()

router.post('/project', createProject)
router.get('/project', GetAllProjects)
router.get('/project/:id', GetProjectById)
router.put('/project/:id', UpdateProject)
router.patch('/project_add_category', addCategoryToProject)

export default router
