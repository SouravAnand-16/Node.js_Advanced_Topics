const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://shlok:gaikwad@cluster0.mskjtgx.mongodb.net/crypto_currency?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = connection;
