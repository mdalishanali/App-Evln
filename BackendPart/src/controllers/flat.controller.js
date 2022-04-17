const express = require("express");
const Flat = require("../models/flat.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const flat = await Flat.create(req.body);
    console.log("admin", flat);
    return res.status(201).send(flat);
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    const flat = await Flat.find({})
      .populate("apartmentId")
      .populate("admin_id")
      .lean()
      .exec();
    console.log("admin", flat);
    return res.status(201).send(flat);
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).send(error.message);
  }
});

module.exports = router;
