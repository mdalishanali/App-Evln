const express = require("express");
const Apartment = require("../models/apartment.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const apartment = await Apartment.create(req.body);
    console.log("apartment", apartment);
    return res.status(201).send(apartment);
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).send(error.message);
  }
});

module.exports = router;
