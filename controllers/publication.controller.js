import Publication from '../models/publication'

<<<<<<< HEAD
export default {
  add: async (req, res, next) => {
    try {
      const publication = await Publication.create({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        countrySide: req.body.countrySide,
        type: req.body.type,
        categories: req.body.categories,
        author: req.body.author,
      });
      res.status(201).send(publication);
    } catch (e) {
      res.status(500).json({
        message: "Error while adding publication",
        e,
      });
    }
  },
  list: async (req, res, next) => {
    try {
      const publications = await Publication.find().select('title image');
      res.status(200).json(publications);
    } catch (e) {
      res.status(500).json({
        message: "Error while listing publications",
        e,
      });
    }
  },
  query: async (req, res, next) => {
    try {
      const publication = await Publication.findOne({
        _id: req.params.id,
      }).populate("comments");
      if (!publication) {
        res.status(404).json({
          message: "Publication not found",
        });
      } else {
        res.status(200).json(publication);
      }
    } catch (e) {
      res.status(500).json({
        message: "Error while searching publication",
        e,
      });
    }
  },
  update: async (req, res, next) => {
    try {
      const publication = await Publication.findByIdAndUpdate(
=======
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

const listPublications = async (req, res, next) => {
  try {
    const publications = await Publication.find().select('title image')
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
    }).populate('comments')
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
>>>>>>> development
        {
          _id: id,
        },
        {
<<<<<<< HEAD
          title: req.body.title,
          content: req.body.content,
          image: req.body.image,
          countrySide: req.body.countrySide,
          type: req.body.type,
          categories: req.body.categories,
          author: req.body.author,
        }
      );
      res.status(205).json(publication);
    } catch (e) {
      res.status(500).json({
        message: "Error while updating publication",
        e,
      });
    }
  },
  likePublication: async (req, res, next) => {
    const { id } = req.params;
    try {
      let publicationLiked = await Publication.findOne({
        _id: id,
      });
      if (!publicationLiked) {
        res.status(404).json({
          message: "Publication not found",
        });
      } else {
        let likes = publicationLiked.likes;
        likes++;
        await Publication.findByIdAndUpdate(
          {
            _id: id,
          },
          {
            likes,
          }
        );
        res.status(200).json({
          message: "Publication liked!",
        });
      }
    } catch (e) {
      res.status(500).json({
        message: "Error while liking publication",
        e,
      });
    }
  },
  remove: async (req, res, next) => {
    try {
      const publication = await Publication.findByIdAndDelete({
        _id: req.params.id,
      });
      res.status(200).json(publication);
    } catch (e) {
      res.status(500).json({
        message: "Error while removing publication",
        e,
      });
    }
  },
};
=======
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
  likePublication,
  removePublication,
}
>>>>>>> development
