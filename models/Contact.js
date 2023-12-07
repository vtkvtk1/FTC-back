const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DepositSchema = new Schema(
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

const Deposit = mongoose.model("Deposit", DepositSchema);

module.exports = Deposit;
