// routes/propertyRoutes.js
const express = require("express");
const { getProperties, searchProperties } = require("../controllers/propertyController");
const router = express.Router();

// Route to get all properties
router.get("/properties", getProperties);

// Route to search properties
router.get("/search", searchProperties);

module.exports = router;
