import Comment from "./../models/comment";
import Publication from "../models/publication";

export default {
  add: async (req, res, next) => {
    const { content, publication, author } = req.body;
    try {
      const comment = await Comment.create({
        content,
        publication,
        author,
      });
      res.status(201).json(comment);
    } catch (e) {
      res.status(500).json({
        message: "Error while adding comment",
      });
    }
  },
  list: async (req, res, next) => {
    try {
      const teams = await Comment.find().populate("publication");
      res.status(200).json(teams);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  query: async (req, res, next) => {
    const { id } = req.params;
    try {
      const comment = await Comment.findById(id).populate("publication");
      if (!comment) {
        res.status(404).json({
          message: "Comment not found",
        });
      } else {
        res.status(200).json(comment);
      }
    } catch (e) {
      res.status(500).json({
        message: "Error while...",
      });
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
      const comment = await Comment.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          content,
        }
      );
      res.status(205).json(comment);
    } catch (e) {
      res.status(500).json({
        message: "Error while updating a comment",
      });
    }
  },
  remove: async (req, res, next) => {
    const { id } = req.params;
    try {
      const comment = await Comment.findByIdAndDelete({
        _id: id,
      });
      res.status(200).json(comment);
    } catch (e) {
      res.status(500).json({
        message: "Error while deleting a comment",
      });
    }
  },
};
