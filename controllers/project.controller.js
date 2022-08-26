import Project from '../models/project.js'
import Category from '../models/category.js'
import Technology from '../models/technology.js'

const createProject = async (req, res) => {
  const {
    title,
    description,
    image,
    author,
    video,
    team,
    categories,
    technologies,
  } = req.body
  try {
    const project = await Project.create({
      title,
      description,
      image,
      author,
      video,
      team,
      categories,
      technologies,
    })
    res.status(201).json({
      message: 'Project created',
      project,
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while adding project',
      error,
    })
  }
}

const addCategoryToProject = async (req, res) => {
  const { projectId, categoryId } = req.body
  try {
    await Project.findByIdAndUpdate(
      projectId,
      {
        $addToSet: { categories: categoryId },
      },
      { new: true, useFindAndModify: false },
    )
    await Category.findByIdAndUpdate(
      categoryId,
      {
        $addToSet: { projects: projectId },
      },
      { new: true, useFindAndModify: false },
    )
    res.send({ message: 'Category added to project' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while adding category to project', error })
  }
}

const addTechnologyToProject = async (req, res) => {
  const { projectId, technologyId } = req.body
  try {
    await Project.findByIdAndUpdate(
      projectId,
      {
        $addToSet: { technologies: technologyId },
      },
      { new: true, useFindAndModify: false },
    )
    await Technology.findByIdAndUpdate(
      technologyId,
      {
        $addToSet: { projects: projectId },
      },
      { new: true, useFindAndModify: false },
    )
    res.send({ message: 'Technology added to project' })
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error while adding technology to project', error })
  }
}

const GetProjects = async (req, res) => {
  const { page, limit, title } = req.query
  const options = {
    page: page ?? 1,
    limit: limit ?? 10,
  }
  let findAll = {
    isActive: true,
  }
  const queryByTitle = {
    isActive: true,
    title: { $regex: title, $options: 'i' },
  }
  let query = findAll

  if (title) query = queryByTitle

  try {
    const projects = await Project.paginate(query, options)
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({
      message: 'Error while listing projects',
      error,
    })
  }
}

const GetAllProjects = async (req, res) => {
  const { page, limit, title } = req.query
  let query = {}
  const options = {
    page: page ?? 1,
    limit: limit ?? 10,
  }
  const findAll = {}
  const findByTitle = {
    isActive: true,
    title: { $regex: title, $options: 'i' },
  }
  query = findAll
  if (title) query = findByTitle
  try {
    const projects = await Project.paginate(query, options)
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({
      message: 'Error while listing projects',
      error,
    })
  }
}

const GetProjectById = async (req, res) => {
  const { id } = req.params
  try {
    const project = await Project.findById({
      _id: id,
    }).populate([
      {
        path: 'author',
        model: 'user',
        select: 'firstname lastname email avatar',
      },
      {
        path: 'team',
        model: 'team',
        select: 'cohortType cohortNumber group',
      },
      {
        path: 'categories',
        model: 'category',
      },
      {
        path: 'technologies',
        model: 'technology',
      },
    ])
    if (!project) {
      res.status(404).json({
        message: 'Project not found',
      })
    } else {
      res.status(200).json(project)
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error while searching a project',
      error,
    })
  }
}

const UpdateProject = async (req, res) => {
  const { id } = req.params
  const {
    title,
    description,
    image,
    author,
    video,
    team,
    categories,
    technologies,
  } = req.body
  try {
    const project = await Project.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
        image,
        author,
        video,
        team,
        categories,
        technologies,
      },
    )
    if (!project) {
      res.status(404).json({
        message: 'Project not found',
      })
    } else {
      res.status(200).json(project)
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error while searching a project',
      error,
    })
  }
}

const activateProject = async (req, res) => {
  const { id } = req.params
  try {
    await Project.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        isActive: true,
      },
    )
    res.status(201).json({
      message: 'Project activated',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while activating a project',
      error,
    })
  }
}

const deactivateProject = async (req, res) => {
  const { id } = req.params
  try {
    await Project.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        isActive: false,
      },
    )
    res.status(201).json({
      message: 'Project deactivated',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while deactivating a project',
      error,
    })
  }
}

const removeProject = async () => {
  const { id } = req.params
  try {
    await Project.findByIdAndRemove({ _id: id })
    res.status(201).json({
      message: 'Project deleted',
    })
  } catch (error) {
    res.status(500).json({
      message: 'Error while deleting a project',
      error,
    })
  }
}

export default {
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
}
