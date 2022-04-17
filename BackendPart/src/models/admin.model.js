const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    //apartment: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

adminSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  // secret , salt => sdkfhsdkfh , secret + sdkfhsdkfh => dskfgkcskdfgsdkfsdf
  // salt
  // hashing rounds =>
  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

adminSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
//yaha par sirf we want to save hash password
