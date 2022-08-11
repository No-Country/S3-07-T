const { Router } = require('express')

const {
  createProject,
  GetAllProjects,
  GetProjectById
} = require('../controllers/project.controller')

const { Auth } = require('../middlewares/auth.middlewares')

export const routesProject = Router()

routesProject.post('/project', Auth, createProject)
routesProject.get('/project', GetAllProjects)
routesProject.get('/project/:id', GetProjectById)
