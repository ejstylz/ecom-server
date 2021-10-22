const axios = require("axios");

module.exports = {
  async getObjects(req, res, next) {
    try {
      const object = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${req.query.id}`
      );
      if (object) {
        res.status(200).send(object.data);
      }
    } catch (error) {
      console.error(error);
      res.status(404).json({
        error: {
          msg: error.message,
        },
      });
    }
  },
};
