var express = require("express");
var router = express.Router();

const { getObjects } = require("../controllers");

/* GET home page. */
router.get("/", getObjects);

module.exports = router;
