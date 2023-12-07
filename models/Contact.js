const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Deposit = mongoose.model("Contacts", ContactSchema);

module.exports = Deposit;
