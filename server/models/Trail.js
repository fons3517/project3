const { Schema } = require("mongoose");

const trailSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  directions: { type: String, required: true },
  trailId: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
  },
  lon: {
    type: String,
    required: true,
  },
  difficulty: { type: String, required: true },
});

module.exports = trailSchema;
