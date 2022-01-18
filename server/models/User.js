const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");
const trailSchema = require("./Trail");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"]
    },
    password: {
      type: String,
      required: true,
      minLenth: 8
    },
    trails: [trailSchema]
    /*hikes: [{ type: Schema.Types.ObjectId, ref: "Hike" }]*/
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true
    }
  }
);

// pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

//compare incoming password w/ hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
