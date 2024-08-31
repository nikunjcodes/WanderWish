// controllers/propertyController.js
const properties = require("../data/Properties");

// Controller function to get all properties
const getProperties = (req, res) => {
  res.json(properties);
};

// Controller function to search properties
const searchProperties = (req, res) => {
  const { q } = req.query;
  // Search by name or location
  const results = properties.filter(property => 
    property.name.toLowerCase().includes(q.toLowerCase()) ||
    property.location.toLowerCase().includes(q.toLowerCase())
  );
  res.json(results);
};

module.exports = { getProperties, searchProperties };
