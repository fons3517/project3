const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const trailSchema = new Schema({
  trailId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
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
  link: {
    type: String
  },
  img: {
    type:String
  }
});

module.exports = trailSchema;
