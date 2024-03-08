const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/sending_email");

module.exports = connection;
