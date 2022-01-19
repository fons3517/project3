const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const trailSchema = new Schema({
  trailId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  directions: {
    type: String,
  },
  difficulty: {
    type: String,
  },
  length: {
    type: String,
  },
  rating: {
    type: Number,
  },
  url: {
    type: String,
  },
  img: {
    type: String,
  }
});

const Trail = mongoose.model("Trail", trailSchema)

module.exports = trailSchema;
