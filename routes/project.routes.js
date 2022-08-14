import Express, { Router } from 'express'

import {
  createProject,
  GetAllProjects,
  GetProjectById
} from '../controllers/project.controller'

import { Auth } from '../middlewares/auth.middlewares'

export const routesProject = Router()

routesProject.post('/project', Auth, createProject)
routesProject.get('/project', GetAllProjects)
routesProject.get('/project/:id', GetProjectById)
