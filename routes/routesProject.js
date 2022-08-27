import { Router } from 'express'

import projectController from '../controllers/project.controller'

const {
  createProject,
  GetProjects,
  GetAllProjects,
  GetProjectById,
  UpdateProject,
  addCategoryToProject,
  addTechnologyToProject,
  activateProject,
  deactivateProject,
  removeProject,
  updateImageProject,
  removeElement,
} = projectController
const upload = require('../middlewares/updateImageProject')
const router = Router()

router.post('/project', createProject)

router.get('/project', GetProjects)

router.get('/project_all', GetAllProjects)

router.get('/project/:id', GetProjectById)

router.put('/project/:id', UpdateProject)

router.put('/projectImage/:id', upload.single('image'), updateImageProject)

router.patch('/project_add_category', addCategoryToProject)

router.patch('/project_add_technology', addTechnologyToProject)

router.patch('/project_activate/:id', activateProject)

router.patch('/project_deactivate/:id', deactivateProject)

router.patch('/project_remove_element', removeElement)

router.delete('/project/:id', removeProject)

export default router
