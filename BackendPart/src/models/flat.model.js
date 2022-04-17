const mongoose = require("mongoose");
const flatSchema = new mongoose.Schema({
  apartmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "apartment",
    required: true,
  },
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
    required: true,
  },
  flatNo: { type: Number, required: true },
  flatName: { type: String, required: true },
  flatOwner: { type: String, required: true },
  flatImage: { type: String, required: true },
});
//625bbe783bd55f55b6d4f59a
const Flat = mongoose.model("flat", flatSchema);
module.exports = Flat;
//apartment a-parent - flat is child
/**
 * The main page should show the list of Flat details along
 *  with the total no of residents
 * in that particular flat (BONUS: Pictures for the flats)
 */
