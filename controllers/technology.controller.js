import Technology from "../models/technology";

export default {
  add: async (req, res, next) => {
    try {
      const tech = await Technology.create({
        name: req.body.name,
      });
      res.status(200).json(tech);
    } catch (e) {
      res.status(500).json({
        message: "Error while adding technology",
      });
    }
  },
  list: async (req, res, next) => {
    try {
      const techs = await Technology.find();
      if (!techs) {
        res.status(404).json({
          message: "there's no technologies",
        });
      } else {
        res.status(200).json(techs);
      }
    } catch (e) {
      res.status(500).json({
        message: "Error while listing technologies",
      });
    }
  },
  query: async (req, res, next) => {
    try {
      const tech = await Technology.findOne({
        _id: req.params.id,
      });
      if (!tech) {
        res.status(404).json({
          message: "Technology not found",
        });
      } else {
        res.status(200).json(tech);
      }
    } catch (e) {
      res.status(500).json({
        message: "Error while searching a technology",
      });
    }
  },
  update: async (req, res, next) => {
    try {
      const tech = await Technology.findByIdAndUpdate(
        { _id: req.params.id },
        { name: req.body.name }
      );
      res.status(200).json(tech);
    } catch (e) {
      res.status(500).json({
        message: "Error while updating a technology",
      });
    }
  },
  remove: async (req, res, next) => {
    try {
      const tech = await Technology.findByIdAndDelete({
        _id: req.params.id,
      });
      res.status(200).json(tech);
    } catch (e) {
      res.status(500).json({
        message: "Error while deleting a technology",
      });
    }
  },
};
