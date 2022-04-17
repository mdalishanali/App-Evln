const express = require("express");
const connect = require("./config/db");
require("dotenv").config();
const cors = require("cors");
//import controllers
//const admin_controller = require("./controllers/admin.controller");
//flat
const flat_controller = require("./controllers/flat.controller");
const { register, login, newToken } = require("./controllers/admin.controller");
const apartment_controller = require("./controllers/apartment.controller");
const app = express();
app.use(express.json());
//PORT = process.env(PORT) || 3030;
//
app.use(cors());

// /register
app.post("/register", register);
app.post("/login", login);

//app.use("/", admin_controller);
app.use("/flat", flat_controller);

app.use("/apartment", apartment_controller);
app.listen(9998, async () => {
  try {
    await connect();
    console.log("Connected succeess");
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(e.message);
  }
});
