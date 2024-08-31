// models/Property.js
const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;