const mongoose = require("mongoose");
const apartmentSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
    required: true,
  },
  ApartmentNO: { type: Number, required: true },
  ApartmentName: { type: String, required: true },
});
//625bbe783bd55f55b6d4f59a
const Apartment = mongoose.model("apartment", apartmentSchema);
module.exports = Apartment;
//apartment a-parent - flat is child
/**
 * The main page should show the list of Flat details along
 *  with the total no of residents
 * in that particular flat (BONUS: Pictures for the flats)
 */
