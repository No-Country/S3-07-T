import { Router } from 'express'

import projectController from '../controllers/project.controller'

const {
  createProject,
  GetProjects,
  GetAllProjects,
  GetProjectById,
  UpdateProject,
  addCategoryToProject,
  activateProject,
  deactivateProject,
  removeProject,
} = projectController

const router = Router()

router.post('/project', createProject)

router.get('/project', GetProjects)

router.get('/project_all', GetAllProjects)

router.get('/project/:id', GetProjectById)

router.put('/project/:id', UpdateProject)

router.patch('/project_add_category', addCategoryToProject)

router.patch('/project_activate/:id', activateProject)

router.patch('/project_deactivate/:id', deactivateProject)

router.delete('/project/:id', removeProject)

export default router
