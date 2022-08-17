import Publication from '../models/publication'
import Category from '../models/category'

const addPublication = async (req, res) => {
  const {
    title,
    content,
    image,
    countrySide,
    type,
    categories,
    author,
  } = req.body
  try {
    const publication = await Publication.create({
      title,
      content,
      image,
      countrySide,
      type,
      categories,
      author,
    })
    res.status(201).send(publication)
  } catch (e) {
    res.status(500).json({
      message: 'Error while adding publication',
      e,
    })
  }
}

const addCategoryToPublication = async (req, res) => {
  const { publicationId, categoryId } = req.body
  await Publication.findByIdAndUpdate(publicationId, {
    $push: { categories: categoryId },
  })
  await Category.findByIdAndUpdate(categoryId, {
    $push: { publications: publicationId },
  })
  res.status(200).json({
    message: 'Category added to publication!',
  })
  try {
  } catch (error) {
    res.status(500).json({
      message: 'Error while adding category to publication',
      e,
    })
  }
}

const listPublications = async (req, res) => {
  const { page, limit } = req.query
  const options = {
    select: 'title image',
    page: page ?? 1,
    limit: limit ?? 10,
  }
  try {
    const publications = await Publication.paginate({}, options)
    res.status(200).json(publications)
  } catch (e) {
    res.status(500).json({
      message: 'Error while listing publications',
      e,
    })
  }
}

const getPublicationById = async (req, res, next) => {
  const { id } = req.params
  try {
    const publication = await Publication.findOne({
      _id: id,
    }).populate([
      {
        path: 'comments',
        model: 'comment',
      },
      {
        path: 'author',
        model: 'user',
        select: 'firstName lastName email',
      },
      {
        path: 'categories',
        model: 'category',
      },
    ])
    if (!publication) {
      res.status(404).json({
        message: 'Publication not found',
      })
    } else {
      res.status(200).json(publication)
    }
  } catch (e) {
    res.status(500).json({
      message: 'Error while searching publication',
      e,
    })
  }
}

const updatePublication = async (req, res, next) => {
  const { id } = req.params
  const {
    title,
    content,
    image,
    countrySide,
    type,
    categories,
    author,
  } = req.body
  try {
    const publication = await Publication.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        content,
        image,
        countrySide,
        type,
        categories,
        author,
      },
    )
    res.status(205).json(publication)
  } catch (e) {
    res.status(500).json({
      message: 'Error while updating publication',
      e,
    })
  }
}

const likePublication = async (req, res) => {
  const { id } = req.params
  try {
    let publicationLiked = await Publication.findOne({
      _id: id,
    })
    if (!publicationLiked) {
      res.status(404).json({
        message: 'Publication not found',
      })
    } else {
      let likes = publicationLiked.likes
      likes++
      await Publication.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          likes,
        },
      )
      res.status(200).json({
        message: 'Publication liked!',
      })
    }
  } catch (e) {
    res.status(500).json({
      message: 'Error while liking publication',
      e,
    })
  }
}

const removePublication = async (req, res, next) => {
  const { id } = req.params
  try {
    const publication = await Publication.findByIdAndDelete({
      _id: id,
    })
    res.status(200).json(publication)
  } catch (e) {
    res.status(500).json({
      message: 'Error while removing publication',
      e,
    })
  }
}

export default {
  addPublication,
  listPublications,
  getPublicationById,
  updatePublication,
  addCategoryToPublication,
  likePublication,
  removePublication,
}
