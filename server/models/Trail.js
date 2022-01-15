const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const trailSchema = new Schema({
  trailId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  directions: {
    type: String,
    required: true
  },
  lat: {
    type: String,
  },
  lon: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true
  },
  length: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const Trail = mongoose.model("Trail", trailSchema)

module.exports = Trail;
