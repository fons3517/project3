const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const trailSchema = new Schema({

});

const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;