require("dotenv").config();
const express = require("express");
const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
//
const newToken = (admin) => {
  //return jwt.sign({ admin }, process.env.JWT_SECRET_KEY);
  return jwt.sign({ admin }, "alishanali");
};
const register = async (req, res) => {
  try {
    let admin = await Admin.findOne({ email: req.body.email }).lean().exec();
    if (admin)
      return res.status(400).send({ message: "Please try another email" });

    admin = await Admin.create(req.body);
    const token = newToken(admin);
    res.send({ admin, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const admin = await Admin.findOne({ email: req.body.email });

    // If user is not found then return error
    if (!admin)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // if user is found then we will match the passwords
    const match = admin.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // then we will create the token for that user
    const token = newToken(admin);
    //const data = await Admin.find().populate("flat").lean().exec();
    //  const books = await Book.find({ author_id: req.params.id }).populate("author_id").populate("section_id").lean().exec()

    // then return the user and the token
    res.send({ admin, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login, newToken };
