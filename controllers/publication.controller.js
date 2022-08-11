import Publication from "../models/publication";

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
      const publications = await Publication.find().populate("comments");
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
      });
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
        {
          _id: req.params.id,
        },
        {
          title: req.body.title,
          content: req.body.content,
          image: req.body.image,
          countrySide: req.body.countrySide,
          type: req.body.type,
          categories: req.body.categories,
          comments: req.body.comments,
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
