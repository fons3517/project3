const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const hikeSchema = new Schema({
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

const Hike = mongoose.model("Hike", hikeSchema)

module.exports = Hike;
