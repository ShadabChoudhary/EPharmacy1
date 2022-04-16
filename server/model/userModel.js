const mongoose = require("mongoose");
const validator = require("validator");
// const crypto = require("crypto");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: [30, "Name Cannot Exceed 30 Characters"],
    minlength: [4, "Name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minlength: [8, "Password should be greater than 8 characters"],
    select: false,
  },

  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: { type: String },
  resetPasswordExpire: { type: Date },
});

const userMODEL = mongoose.model("user", userSchema);

module.exports = userMODEL;
