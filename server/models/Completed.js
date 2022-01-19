const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const completedSchema = new Schema({
  trailId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  difficulty: {
    type: String
  },
  length: {
    type: String
  },
  rating: {
    type: Number
  },
  url: {
    type: String
  },
  img: {
    type: String
  }
});


module.exports = completedSchema;
