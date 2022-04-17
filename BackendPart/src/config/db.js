const mongoose = require("mongoose");

const connect = async () => {
  return mongoose.connect(
    "mongodb+srv://ali:ali@cluster0.c5wi7.mongodb.net/Apartment?retryWrites=true&w=majority"
  );
};

module.exports = connect;
