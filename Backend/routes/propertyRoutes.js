const express = require("express");
const { getProperties, searchProperties } = require("../controllers/propertyController");
const router = express.Router();

router.get("/properties", getProperties);

router.get("/search", searchProperties);

module.exports = router;
