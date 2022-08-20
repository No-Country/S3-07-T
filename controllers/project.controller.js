import Project from '../models/project.js'
import Category from '../models/category.js'

const createProject = async (req, res) => {
  const {
    title,
    description,
    image,
    author,
    video,
    teamLeader,
    team,
    categories,
  } = req.body
  try {
    const project = await Project.create({
      title,
      description,
      image,
      author,
      video,
      teamLeader,
      team,
      categories,
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
        $push: { categories: categoryId },
      },
      { new: true, useFindAndModify: false },
    )
    await Category.findByIdAndUpdate(
      categoryId,
      {
        $push: { projects: projectId },
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

const GetProjects = async (req, res) => {
  const { page, limit } = req.query
  const options = {
    select: 'title image isActive',
    page: page ?? 1,
    limit: limit ?? 10,
  }
  try {
    const projects = await Project.paginate(
      {
        isActive: true,
      },
      options,
    )
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({
      message: 'Error while listing projects',
      error,
    })
  }
}

const GetAllProjects = async (req, res) => {
  const { page, limit } = req.query
  const options = {
    select: 'title image isActive',
    page: page ?? 1,
    limit: limit ?? 10,
  }
  try {
    const projects = await Project.paginate({}, options)
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
        path: 'teamLeader',
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
        select: 'name',
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
    teamLeader,
    team,
    categories,
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
        teamLeader,
        team,
        categories,
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
  activateProject,
  deactivateProject,
  removeProject,
}
