const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const completedSchema = new Schema({

});


const Completed = mongoose.model("Completed", completedSchema);

module.exports = Completed;
