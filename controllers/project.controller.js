import { Project } from '../models/project.js'

const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({
      message: 'Project created',
      project
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while adding project',
      error
    })
  }
}

const GetAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({
      message: 'Error while listing projects',
      error
    })
  }
}

const GetProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
    if (!project) {
      res.status(404).json({
        message: 'Project not found'
      })
    } else {
      res.status(200).json(project)
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error while searching a project',
      error
    })
  }
}

export { createProject, GetAllProjects, GetProjectById }
