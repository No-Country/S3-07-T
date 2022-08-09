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
    } catch (e) {
      res.status(500).json({
        message: "Error while",
      });
    }
  },
  update: async (req, res, next) => {
    try {
    } catch (e) {
      res.status(500).json({
        message: "Error while",
      });
    }
  },
  remove: async (req, res, next) => {
    try {
    } catch (e) {
      res.status(500).json({
        message: "Error while",
      });
    }
  },
};
