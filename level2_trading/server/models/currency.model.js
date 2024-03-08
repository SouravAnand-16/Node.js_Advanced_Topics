const mongoose = require("mongoose");
const currencySchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  value: { type: Number },
  code: { type: String },
});
const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
